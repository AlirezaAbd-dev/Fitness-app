import CheckboxWithLabel from '@/components/ui/checkbox';
import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import { Eye, EyeOff, KeyRound, Mail } from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, styled } from 'tamagui';
import { Controller, useForm } from 'react-hook-form';
import loginValidation, {
  LoginValidationType,
} from '../validation/login.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import useLoginMutation from '../queries/login.mutation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '@/constants/StorageKeys.constants';

const Section = styled(View, {
  marginTop: 36,
});

const InputLabel = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans',
  color: '$text-25',
});

const LoginOptionsContainer = styled(View, {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 16,
});

const ForgetPasswordText = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans',
  color: '#6B9FFF',
});

const LoginForm = () => {
  const router = useRouter();

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const { mutate, data, isPending, error } = useLoginMutation();

  const { control, handleSubmit } = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmitHandler = (values: LoginValidationType) => {
    mutate(values);
  };

  useEffect(() => {
    (async () => {
      if (!isPending && data) {
        await AsyncStorage.setItem(storageKeys.TOKEN, data.data.data.token);
        router.dismissAll();
        router.replace('/home');
      }
    })();
  }, [data, isPending]);

  return (
    <Section>
      <InputLabel>Email</InputLabel>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
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
            {fieldState.error && (
              <Text
                marginTop={4}
                fontFamily={'$OpenSans'}
                fontSize={12}
                color={'$error-500'}
              >
                {fieldState.error?.message}
              </Text>
            )}
          </>
        )}
      />

      <InputLabel marginTop={23}>Password</InputLabel>
      <Controller
        control={control}
        name='password'
        render={({ field, fieldState }) => (
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
                    onPress={() => {
                      setHiddenPassword(false);
                    }}
                  />
                ) : (
                  <Eye
                    size={20}
                    color={'$neutral-700'}
                    onPress={() => {
                      setHiddenPassword(true);
                    }}
                  />
                )
              }
            />
            {fieldState.error && (
              <Text
                color={'$error-500'}
                marginTop={4}
                fontFamily={'$OpenSans'}
                fontSize={12}
              >
                {fieldState.error?.message}
              </Text>
            )}
          </>
        )}
      />

      <LoginOptionsContainer>
        <CheckboxWithLabel
          size={24}
          label='Remember me'
        />
        <Link href={'/(auth)/forget-password/enter-email'}>
          <ForgetPasswordText>Forget password?</ForgetPasswordText>
        </Link>
      </LoginOptionsContainer>

      <View marginTop={62}>
        <Text
          color={'$error-500'}
          marginBottom={4}
          textAlign='center'
          fontFamily={'$OpenSans'}
          fontSize={12}
        >
          {error?.response?.data.message}
        </Text>
        <CustomButton
          text='Sign in'
          size='small'
          onPress={handleSubmit(onSubmitHandler)}
          isPending={isPending}
          disabled={isPending}
        />
      </View>
    </Section>
  );
};

export default LoginForm;
