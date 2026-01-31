import { useState } from 'react';
import { useNavigate, Navigate, Link, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, isAuthenticated, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan');

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111827]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }
    setIsLoading(true);
    try {
      await register(name, email, password);
      toast.success('Welcome to Crivient CRM!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-bold text-white">Crivient</Link>
          <p className="text-gray-400 mt-2">
            {plan ? `Start your free trial of the ${plan} plan` : 'Create your free account'}
          </p>
        </div>

        <div className="bg-[#1F2937] rounded-2xl border border-gray-700 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" value={name}
                onChange={(e) => setName(e.target.value)} required
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" value={email}
                onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input type="password" placeholder="Min. 8 characters" value={password}
                onChange={(e) => setPassword(e.target.value)} required
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input type="password" placeholder="Re-enter password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} required
                className="w-full px-4 py-3 bg-[#111827] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF]" />
            </div>
            <button type="submit" disabled={isLoading}
              className="w-full bg-[#D946EF] text-white py-3 rounded-lg font-bold hover:bg-[#C026D3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Creating account...' : 'Start Free Trial'}
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account? <Link to="/login" className="text-[#D946EF] hover:underline">Sign in</Link>
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">14-day free trial. No credit card required.</p>
      </div>
    </div>
  );
}
