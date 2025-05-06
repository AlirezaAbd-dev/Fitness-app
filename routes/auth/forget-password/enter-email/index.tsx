import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import { ArrowLeft, KeyRound, Mail } from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import forgetPassEnterEmailValidation, {
  ForgetPassEnterEmailValidationType,
} from './forget_pass_enter_email.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import useForgetPassEnterEmailMutation from './forget_pass_enter_email.mutatuion';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: '$background',
  paddingHorizontal: 16,
  paddingVertical: 24,
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
});

const Label = styled(Text, {
  color: '$text-25',
  fontSize: 14,
  fontFamily: '$OpenSans',
  marginTop: 24,
});

const AlreadyHaveAccountText = styled(Text, {
  marginTop: 20,
  color: '$text-25',
  textAlign: 'center',
  fontSize: 14,
  fontFamily: '$OpenSans',
});

const EnterEmailPage = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm<ForgetPassEnterEmailValidationType>(
    {
      resolver: zodResolver(forgetPassEnterEmailValidation),
    },
  );

  const { mutate, isPending, error } = useForgetPassEnterEmailMutation();

  function onSubmitHandler(values: ForgetPassEnterEmailValidationType) {
    mutate(values);
  }

  return (
    <StyledSafeAreaView>
      <Section>
        <View>
          <ArrowLeft
            size={24}
            color={'$text-25'}
            onPress={() => {
              router.back();
            }}
          />
          <IconContainer>
            <KeyRound
              size={24}
              color={'$neutral-950'}
            />
          </IconContainer>
          <Title>Reset your password</Title>
          <Description>We’ll send you a reset code to your email.</Description>

          <Label>Email</Label>
          <Controller
            control={control}
            name='email'
            render={({ field, fieldState }) => (
              <>
                <CustomInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  keyboardType='email-address'
                  marginTop={12}
                  leadingIcon={
                    <Mail
                      size={20}
                      color={'$neutral-700'}
                    />
                  }
                />
                <Text
                  color={'$error-500'}
                  marginTop={4}
                  fontFamily={'$OpenSans'}
                  fontSize={12}
                >
                  {fieldState.error?.message}
                </Text>
              </>
            )}
          />
        </View>
        <View>
          <Text
            color={'$error-500'}
            marginBottom={4}
            fontFamily={'$OpenSans'}
            fontSize={12}
            textAlign='center'
          >
            {error?.response?.data.message}
          </Text>
          <CustomButton
            text='Continue'
            size='small'
            onPress={handleSubmit(onSubmitHandler)}
            isPending={isPending}
            disabled={isPending}
          />
          <AlreadyHaveAccountText>
            Already have an account?{' '}
            <AlreadyHaveAccountText
              color={'#6B9FFF'}
              onPress={() => {
                router.push('/(auth)/login');
              }}
            >
              Log in
            </AlreadyHaveAccountText>
          </AlreadyHaveAccountText>
        </View>
      </Section>
    </StyledSafeAreaView>
  );
};

export default EnterEmailPage;
