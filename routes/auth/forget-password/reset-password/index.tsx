import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import {
  ArrowLeft,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Mail,
} from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';

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

const AlreadyHaveAccountText = styled(Text, {
  marginTop: 20,
  color: '$text-25',
  textAlign: 'center',
  fontSize: 14,
  fontFamily: '$OpenSans',
});

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

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
            <LockKeyhole
              size={24}
              color={'$neutral-950'}
            />
          </IconContainer>
          <Title>Create new password</Title>
          <Description>
            Your new password must be diffrerent from any of your previos
            password.
          </Description>

          <Label>Password</Label>
          <CustomInput
            value={password}
            onChangeText={setPassword}
            keyboardType='email-address'
            marginTop={12}
            leadingIcon={
              <KeyRound
                size={20}
                color={'$neutral-700'}
              />
            }
            trailingIcon={
              <EyeOff
                size={20}
                color={'$neutral-700'}
              />
            }
          />
          <Maximum6Chars>Minimum 6 characters </Maximum6Chars>

          <Label marginTop={20}>Confirm password</Label>
          <CustomInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            keyboardType='email-address'
            marginTop={12}
            leadingIcon={
              <KeyRound
                size={20}
                color={'$neutral-700'}
              />
            }
            trailingIcon={
              <EyeOff
                size={20}
                color={'$neutral-700'}
              />
            }
          />
        </View>
        <View>
          <CustomButton
            text='Reset password'
            size='small'
            onPress={() => {
              router.push({
                pathname: '/auth/forget-password/reset-password-success',
                params: { email: password },
              });
            }}
          />
        </View>
      </Section>
    </StyledSafeAreaView>
  );
};

export default ResetPasswordPage;
