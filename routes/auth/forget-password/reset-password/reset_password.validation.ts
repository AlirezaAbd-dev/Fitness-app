import { z } from 'zod';
import { passwordValidation } from '../../login/validation/login.validation';

const resetPasswordValidation = z
  .object({
    password: passwordValidation,
    confirmPassword: z.string({ message: 'confirmPassword field is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'], // مسیر فیلد مربوطه برای نمایش خطا
  });

export type ResetPasswordValidationType = z.infer<
  typeof resetPasswordValidation
>;
export default resetPasswordValidation;
