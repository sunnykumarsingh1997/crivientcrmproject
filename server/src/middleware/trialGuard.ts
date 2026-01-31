import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';
import { User } from '../models';

export const checkTrialStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const user = await User.findByPk(req.user.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Active subscribers always pass
    if (user.subscription_status === 'active') {
      next();
      return;
    }

    // Check trial expiration
    if (user.subscription_status === 'trial' && user.trial_end_date) {
      const now = new Date();
      if (new Date(user.trial_end_date) < now) {
        await user.update({ subscription_status: 'expired' });
        res.status(403).json({
          message: 'Your trial has expired',
          code: 'TRIAL_EXPIRED',
          trial_end_date: user.trial_end_date,
        });
        return;
      }
    }

    // Expired or cancelled users are blocked
    if (user.subscription_status === 'expired' || user.subscription_status === 'cancelled') {
      res.status(403).json({
        message: 'Your subscription is not active',
        code: 'SUBSCRIPTION_INACTIVE',
      });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
