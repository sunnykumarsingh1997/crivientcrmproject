import { HiCube, HiPlus } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function ProductList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product catalog.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <HiPlus className="w-5 h-5" /> Add Product
        </button>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiCube className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Product Catalog</h3>
          <p className="text-gray-500">Product catalog features are coming soon. This will include inventory management, pricing, and product categories.</p>
        </div>
      </Card>
    </div>
  );
}
