import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import Header from './Header';
import TrialBanner from '../TrialBanner';
import LicenseModal from '../LicenseModal';

export default function CrmLayout() {
  const { isAuthenticated, isLoading, user, refreshUser } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const isActivated = user?.subscription_status === 'active';
  const trialExpired = user?.trial_end_date && new Date(user.trial_end_date) < new Date();
  const canDismiss = !trialExpired;
  const showModal = !isActivated && !dismissed;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <TrialBanner />
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      {showModal && (
        <LicenseModal
          canDismiss={canDismiss}
          onClose={() => setDismissed(true)}
          onActivated={() => refreshUser()}
        />
      )}
    </div>
  );
}
