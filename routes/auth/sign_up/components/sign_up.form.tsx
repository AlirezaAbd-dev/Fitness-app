import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import { Eye, EyeOff, KeyRound, Mail, User } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { styled, Text, View } from 'tamagui';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import signUpValidation, {
  SignUpValidationType,
} from '../validation/signup.validation';
import useSignupMutation from '../queries/signup.mutation';
import { useRouter } from 'expo-router';

const Section = styled(View, {
  marginTop: 32,
});

const InputLabel = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans',
  color: '$text-25',
});

const MaximumCharacters = styled(Text, {
  fontSize: 12,
  fontFamily: '$OpenSans',
  marginTop: 8,
  color: '$text-50',
});

const TermsAndPrivacy = styled(Text, {
  fontSize: 12,
  fontFamily: '$OpenSans',
  color: '$text-50',
  textAlign: 'center',
  marginTop: 16,
});

const TermsAndPrivacyLink = styled(Text, {
  fontSize: 12,
  fontFamily: '$OpenSans',
  color: '#6B9FFF',
  textAlign: 'center',
  marginTop: 16,
});

const SignUpForm = () => {
  const router = useRouter();

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const { mutate, isPending, data, error } = useSignupMutation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpValidationType>({
    resolver: zodResolver(signUpValidation),
  });

  const onSubmitHandler = (values: SignUpValidationType) => {
    mutate({
      email: values.email,
      name: values.username,
      password: values.password,
    });
  };

  return (
    <Section>
      {/* Username */}
      <InputLabel>Username</InputLabel>
      <Controller
        control={control}
        name='username'
        render={({ field }) => (
          <>
            <CustomInput
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              leadingIcon={
                <User
                  size={20}
                  color={'$neutral-700'}
                />
              }
              keyboardType='default'
            />
            {errors.username && (
              <Text
                marginTop={4}
                fontFamily='$OpenSans'
                fontSize={12}
                color='$error-500'
              >
                {errors.username.message}
              </Text>
            )}
          </>
        )}
      />

      {/* Email */}
      <InputLabel marginTop={20}>Email</InputLabel>
      <Controller
        control={control}
        name='email'
        render={({ field }) => (
          <>
            <CustomInput
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              leadingIcon={
                <Mail
                  size={20}
                  color={'$neutral-700'}
                />
              }
              keyboardType='email-address'
            />
            {errors.email && (
              <Text
                marginTop={4}
                fontFamily='$OpenSans'
                fontSize={12}
                color='$error-500'
              >
                {errors.email.message}
              </Text>
            )}
          </>
        )}
      />

      {/* Password */}
      <InputLabel marginTop={20}>Password</InputLabel>
      <Controller
        control={control}
        name='password'
        render={({ field }) => (
          <>
            <CustomInput
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              secureTextEntry={hiddenPassword}
              leadingIcon={
                <KeyRound
                  size={20}
                  color={'$neutral-700'}
                />
              }
              trailingIcon={
                hiddenPassword ? (
                  <EyeOff
                    size={20}
                    color={'$neutral-700'}
                    onPress={() => setHiddenPassword(false)}
                  />
                ) : (
                  <Eye
                    size={20}
                    color={'$neutral-700'}
                    onPress={() => setHiddenPassword(true)}
                  />
                )
              }
              keyboardType='default'
            />
            {errors.password && (
              <Text
                marginTop={4}
                fontFamily='$OpenSans'
                fontSize={12}
                color='$error-500'
              >
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />

      <MaximumCharacters>Minimum 6 characters</MaximumCharacters>

      <View marginTop={24}>
        <Text
          marginBottom={4}
          fontFamily='$OpenSans'
          fontSize={12}
          color='$error-500'
          textAlign='center'
        >
          {error?.response?.data.message}
        </Text>
        <CustomButton
          text='Sign up'
          size='small'
          onPress={handleSubmit(onSubmitHandler)}
          isPending={isPending}
          disabled={isPending}
        />
      </View>

      <TermsAndPrivacy>
        By signing up, you accept our{' '}
        <TermsAndPrivacyLink>Terms</TermsAndPrivacyLink> &{' '}
        <TermsAndPrivacyLink>Privacy</TermsAndPrivacyLink>.
      </TermsAndPrivacy>
    </Section>
  );
};

export default SignUpForm;
