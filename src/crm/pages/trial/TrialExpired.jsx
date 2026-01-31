import { Link } from 'react-router-dom';

export default function TrialExpired() {
  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#1F2937] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#D946EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Your Trial Has Ended</h1>
        <p className="text-gray-400 mb-8">Your 14-day free trial of Crivient CRM has expired. Upgrade to a paid plan to continue using all CRM features.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pricing" className="bg-[#D946EF] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#C026D3] transition-colors">
            View Plans
          </Link>
          <Link to="/" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-[#1F2937] transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
