import { useState } from 'react';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function formatLicenseKey(value) {
  const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 16);
  const parts = [];
  for (let i = 0; i < cleaned.length; i += 4) {
    parts.push(cleaned.slice(i, i + 4));
  }
  return parts.join('-');
}

export default function LicenseModal({ canDismiss, onClose, onActivated }) {
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const formatted = formatLicenseKey(e.target.value);
    setLicenseKey(formatted);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (licenseKey.replace(/-/g, '').length < 16) {
      setError('Please enter a complete license key');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await authService.activateLicense(licenseKey);
      toast.success('License activated successfully!');
      onActivated();
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to activate license';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8">
        {/* Close button - only during trial */}
        {canDismiss && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Activate Crivient CRM</h2>
          <p className="text-gray-500 mt-2">Enter your license key to unlock all features.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <input
                type="text"
                value={licenseKey}
                onChange={handleInputChange}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className={`w-full pl-10 pr-4 py-3 border ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'} rounded-lg focus:outline-none focus:ring-2 text-center text-lg font-mono tracking-widest`}
                maxLength={19}
                disabled={loading}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1 text-center">{error}</p>}
          </div>

          <p className="text-gray-400 text-xs text-center mb-6">
            Your license key was sent to your email after purchase.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Activating...
              </span>
            ) : (
              'Activate Now'
            )}
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <Link to="/contact" className="text-purple-600 hover:underline">Resend license key</Link>
            <span className="text-gray-300">|</span>
            <Link to="/contact" className="text-purple-600 hover:underline">Contact support</Link>
            <span className="text-gray-300">|</span>
            <Link to="/pricing" className="text-purple-600 hover:underline">Buy a license</Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-gray-400">
          Activation is required to continue using Crivient CRM.
        </p>
      </div>
    </div>
  );
}
