import { z } from 'zod';
import {
  emailValidation,
  passwordValidation,
} from '../../login/validation/login.validation';

const signUpValidation = z.object({
  username: z
    .string({ message: 'Username field is required' })
    .min(4, 'Username must be at least 4 characters')
    .max(255, 'Username must be lesser than 255 characters'),
  email: emailValidation,
  password: passwordValidation,
});

export type SignUpValidationType = z.infer<typeof signUpValidation>;

export default signUpValidation;
