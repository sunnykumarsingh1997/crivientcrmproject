import { HiShoppingCart, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function OrderList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">Track and manage customer orders.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Create Order
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Order Management</h3>
          <p className="text-gray-500">Order management features are coming soon. This will include order tracking, invoicing, and delivery management.</p>
        </div>
      </Card>
    </div>
  );
}
