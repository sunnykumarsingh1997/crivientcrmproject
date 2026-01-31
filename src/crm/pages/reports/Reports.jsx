import { HiChartBar } from 'react-icons/hi';
import Card from '../../components/common/Card';

export default function Reports() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-500 mt-1">View detailed analytics and generate reports.</p>
      </div>
      <Card>
        <div className="text-center py-12">
          <HiChartBar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Reports</h3>
          <p className="text-gray-500">Reporting features are coming soon. This will include sales dashboards, revenue forecasting, and conversion analysis.</p>
        </div>
      </Card>
    </div>
  );
}
