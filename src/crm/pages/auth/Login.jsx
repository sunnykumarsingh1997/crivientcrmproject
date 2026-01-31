import { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111827]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-bold text-white">Crivient</Link>
          <p className="text-gray-400 mt-2">Sign in to your CRM dashboard</p>
        </div>

        <div className="bg-[#1F2937] rounded-2xl border border-gray-700 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" value={email}
                onChange={(e) => setEmail(e.target.value)} autoComplete="email"
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input type="password" placeholder="Enter your password" value={password}
                onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>
            <button type="submit" disabled={isLoading}
              className="w-full bg-[#D946EF] text-white py-3 rounded-lg font-bold hover:bg-[#C026D3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account? <Link to="/signup" className="text-[#D946EF] hover:underline">Sign up free</Link>
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">&copy; {new Date().getFullYear()} Crivient CRM. All rights reserved.</p>
      </div>
    </div>
  );
}
