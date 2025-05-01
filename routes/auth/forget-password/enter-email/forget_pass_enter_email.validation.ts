import { emailValidation } from '@/routes/auth/login/validation/login.validation';
import { z } from 'zod';

const forgetPassEnterEmailValidation = z.object({
  email: emailValidation,
});

export type ForgetPassEnterEmailValidationType = z.infer<
  typeof forgetPassEnterEmailValidation
>;
export default forgetPassEnterEmailValidation;
