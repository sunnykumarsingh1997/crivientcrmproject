import { HiCalendar, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function FollowUpList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Follow-ups</h1>
          <p className="text-gray-500 mt-1">Manage your scheduled follow-ups and tasks.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Schedule Follow-up
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiCalendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Follow-up System</h3>
          <p className="text-gray-500">Follow-up management features are coming soon. This will include task scheduling, reminders, and automated notifications.</p>
        </div>
      </Card>
    </div>
  );
}
