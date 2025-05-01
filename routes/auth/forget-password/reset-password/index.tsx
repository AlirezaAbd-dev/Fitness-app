import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View as RNView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
} from '@tamagui/lucide-icons';
import { styled, Text, View } from 'tamagui';
import { useLocalSearchParams, useRouter } from 'expo-router';

import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import resetPasswordValidation, {
  ResetPasswordValidationType,
} from './reset_password.validation';
import useResetPasswordMutation from './reset_password.mutation';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '$background',
});

const ContentContainer = styled(View, {
  paddingHorizontal: 16,
  paddingTop: 24,
  paddingBottom: 32,
});

const IconContainer = styled(View, {
  width: 48,
  height: 48,
  marginTop: 24,
  borderRadius: 12,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled(Text, {
  color: '$text-25',
  fontSize: 18,
  fontFamily: '$OpenSans-Bold',
  marginTop: 16,
});

const Description = styled(Text, {
  color: '$text-100',
  fontSize: 14,
  fontFamily: '$OpenSans',
  marginTop: 4,
  lineHeight: 24,
});

const Label = styled(Text, {
  color: '$text-25',
  fontSize: 14,
  fontFamily: '$OpenSans',
  marginTop: 32,
});

const Maximum6Chars = styled(Text, {
  color: '$text-25',
  fontSize: 12,
  fontFamily: '$OpenSans',
  marginTop: 8,
});

const ResetPasswordPage = () => {
  const router = useRouter();

  const { email } = useLocalSearchParams();

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

  const { control, handleSubmit } = useForm<ResetPasswordValidationType>({
    resolver: zodResolver(resetPasswordValidation),
  });

  const { mutate, isPending, error } = useResetPasswordMutation();

  const onSubmit = (values: ResetPasswordValidationType) => {
    mutate({
      email: email as string,
      password: values.password,
      password_confirmation: values.confirmPassword,
    });
  };

  return (
    <StyledSafeAreaView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <RNView style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            <ContentContainer>
              <ArrowLeft
                size={24}
                color={'$text-25'}
                onPress={() => router.back()}
              />
              <IconContainer>
                <LockKeyhole
                  size={24}
                  color={'$neutral-950'}
                />
              </IconContainer>

              <Title>Create new password</Title>
              <Description>
                Your new password must be different from any of your previous
                passwords.
              </Description>

              {/* Password Field */}
              <Label>Password</Label>
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
                      marginTop={12}
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
                    />
                    {fieldState.error && (
                      <Text
                        marginTop={4}
                        fontSize={12}
                        color={'$error-500'}
                      >
                        {fieldState.error.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Maximum6Chars>Minimum 6 characters</Maximum6Chars>

              {/* Confirm Password Field */}
              <Label marginTop={20}>Confirm password</Label>
              <Controller
                control={control}
                name='confirmPassword'
                render={({ field, fieldState }) => (
                  <>
                    <CustomInput
                      value={field.value}
                      onChangeText={field.onChange}
                      onBlur={field.onBlur}
                      secureTextEntry={hiddenConfirmPassword}
                      marginTop={12}
                      leadingIcon={
                        <KeyRound
                          size={20}
                          color={'$neutral-700'}
                        />
                      }
                      trailingIcon={
                        hiddenConfirmPassword ? (
                          <EyeOff
                            size={20}
                            color={'$neutral-700'}
                            onPress={() => setHiddenConfirmPassword(false)}
                          />
                        ) : (
                          <Eye
                            size={20}
                            color={'$neutral-700'}
                            onPress={() => setHiddenConfirmPassword(true)}
                          />
                        )
                      }
                    />
                    {fieldState.error && (
                      <Text
                        marginTop={4}
                        fontSize={12}
                        color={'$error-500'}
                      >
                        {fieldState.error.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </ContentContainer>
          </ScrollView>

          <View
            padding={16}
            backgroundColor='$background'
          >
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
              text='Reset password'
              size='small'
              onPress={handleSubmit(onSubmit)}
              isPending={isPending}
              disabled={isPending}
            />
          </View>
        </RNView>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default ResetPasswordPage;
2;
