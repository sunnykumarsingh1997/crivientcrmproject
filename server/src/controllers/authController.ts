import { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../models';
import { AuthRequest, generateToken } from '../middleware/auth';

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Check if user is active
    if (!user.is_active) {
      res.status(401).json({ message: 'Account is deactivated. Contact your administrator.' });
      return;
    }

    // Validate password
    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    res.json({
      message: 'Login successful',
      token,
      user: user.toJSON(),
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};

export const me = async (req: AuthRequest, res: Response): Promise<void> => {
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

    res.json({ user: user.toJSON() });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const logout = async (_req: Request, res: Response): Promise<void> => {
  // JWT tokens are stateless, so logout is handled client-side
  // This endpoint exists for API consistency
  res.json({ message: 'Logged out successfully' });
};

export const changePassword = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const { currentPassword, newPassword } = req.body;

    const user = await User.findByPk(req.user.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Validate current password
    const isValidPassword = await user.validatePassword(currentPassword);

    if (!isValidPassword) {
      res.status(400).json({ message: 'Current password is incorrect' });
      return;
    }

    // Hash and update new password
    user.password_hash = await User.hashPassword(newPassword);
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const changePasswordValidation = [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters'),
];

export const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'An account with this email already exists' });
      return;
    }

    const password_hash = await User.hashPassword(password);

    const trialDays = parseInt(process.env.TRIAL_DAYS || '14');
    const trial_start_date = new Date();
    const trial_end_date = new Date();
    trial_end_date.setDate(trial_end_date.getDate() + trialDays);

    const user = await User.create({
      name,
      email,
      password_hash,
      role: 'agent',
      is_active: true,
      trial_start_date,
      trial_end_date,
      subscription_status: 'trial',
    });

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: user.toJSON(),
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};
