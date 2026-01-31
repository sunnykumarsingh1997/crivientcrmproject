import { useAuth } from '../../context/AuthContext';
import AgentDashboard from './AgentDashboard';
import ManagerDashboard from './ManagerDashboard';
import AdminDashboard from './AdminDashboard';

export default function Dashboard() {
  const { user } = useAuth();
  if (!user) return null;

  switch (user.role) {
    case 'admin': return <AdminDashboard />;
    case 'manager': return <ManagerDashboard />;
    case 'agent':
    default: return <AgentDashboard />;
  }
}
