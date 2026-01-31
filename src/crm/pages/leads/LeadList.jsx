import { HiUserGroup, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function LeadList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-500 mt-1">Track and convert your sales leads.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Add Lead
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiUserGroup className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Lead Management</h3>
          <p className="text-gray-500">Lead management features are coming soon. This will include lead scoring, pipeline tracking, and automated follow-ups.</p>
        </div>
      </Card>
    </div>
  );
}
