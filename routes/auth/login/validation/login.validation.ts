import z from 'zod';

const loginValidation = z.object({
  email: z
    .string({ required_error: 'Email field is required' })
    .email({ message: 'Entered email is not valid' })
    .nonempty('Email field is required'),
  password: z
    .string({ required_error: 'Password field is required' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 1 capital letter, 1 symbol, 1 number, and be at least 8 characters long',
    ),
});

export type LoginValidationType = z.infer<typeof loginValidation>;

export default loginValidation;
