import { createContext, useContext, useReducer, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(undefined);

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return { ...state, user: null, token: null, isAuthenticated: false, isLoading: false };
    case 'SET_USER':
      return { ...state, user: action.payload, isAuthenticated: true, isLoading: false };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: 'LOGOUT' });
      return;
    }
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await authService.getMe();
      dispatch({ type: 'SET_USER', payload: data.user });
    } catch {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({ type: 'LOGOUT' });
    }
  };

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, token: data.token } });
  };

  const register = async (name, email, password) => {
    const data = await authService.register(name, email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user, token: data.token } });
  };

  const logout = async () => {
    try { await authService.logout(); } catch {}
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const refreshUser = async () => {
    try {
      const data = await authService.getMe();
      dispatch({ type: 'SET_USER', payload: data.user });
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, checkAuth, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
