import { HiPhone, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function CallList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Call Logs</h1>
          <p className="text-gray-500 mt-1">Track and manage your call activities.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Log Call
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiPhone className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Call Logging</h3>
          <p className="text-gray-500">Call logging features are coming soon. This will include call recording, notes, and outcome tracking.</p>
        </div>
      </Card>
    </div>
  );
}
