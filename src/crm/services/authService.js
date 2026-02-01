import api from './api';

export const authService = {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async register(name, email, password) {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  async logout() {
    await api.post('/auth/logout');
  },

  async getMe() {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async changePassword(currentPassword, newPassword) {
    await api.post('/auth/change-password', { currentPassword, newPassword });
  },

  async activateLicense(licenseKey) {
    const response = await api.post('/auth/activate-license', { licenseKey });
    return response.data;
  },
};
