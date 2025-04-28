import z from 'zod';

const passwordValidation = z
  .string({ required_error: 'Password field is required' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    'Password must contain at least 1 capital letter, 1 symbol, 1 number, and be at least 6 characters long',
  );

const emailValidation = z
  .string({ required_error: 'Email field is required' })
  .email({ message: 'Entered email is not valid' })
  .nonempty('Email field is required');

const loginValidation = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export type LoginValidationType = z.infer<typeof loginValidation>;

export { passwordValidation, emailValidation };
export default loginValidation;
