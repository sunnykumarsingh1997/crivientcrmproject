import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function TrialBanner() {
  const { user } = useAuth();

  if (!user || user.subscription_status !== 'trial' || !user.trial_end_date) return null;

  const daysLeft = Math.max(0, Math.ceil(
    (new Date(user.trial_end_date) - new Date()) / (1000 * 60 * 60 * 24)
  ));

  if (daysLeft > 7) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-sm">
      <span className="text-amber-800">
        {daysLeft === 0
          ? 'Your trial expires today!'
          : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left in your trial.`}
      </span>
      <Link to="/pricing" className="ml-2 text-primary-600 font-semibold hover:underline">
        Upgrade now
      </Link>
    </div>
  );
}
