import { Router } from 'express';
import {
  login,
  loginValidation,
  me,
  logout,
  changePassword,
  changePasswordValidation,
  register,
  registerValidation,
  activateLicense,
  activateLicenseValidation,
} from '../controllers/authController';
import { authenticate } from '../middleware/auth';
import { validate } from '../middleware/validate';

const router = Router();

// Public routes
router.post('/login', validate(loginValidation), login);
router.post('/register', validate(registerValidation), register);

// Protected routes
router.get('/me', authenticate, me);
router.post('/logout', authenticate, logout);
router.post(
  '/change-password',
  authenticate,
  validate(changePasswordValidation),
  changePassword
);
router.post(
  '/activate-license',
  authenticate,
  validate(activateLicenseValidation),
  activateLicense
);

export default router;
