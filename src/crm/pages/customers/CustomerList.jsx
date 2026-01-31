import { HiUsers, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function CustomerList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">Manage your customer database.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Add Customer
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiUsers className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Management</h3>
          <p className="text-gray-500">Customer management features are coming soon. This will include contact management, customer history, and segmentation.</p>
        </div>
      </Card>
    </div>
  );
}
