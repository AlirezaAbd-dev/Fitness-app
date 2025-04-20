import CheckboxWithLabel from '@/components/ui/checkbox';
import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import { Eye, EyeOff, KeyRound, Mail } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, styled } from 'tamagui';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <Section>
      <InputLabel>Email</InputLabel>
      <CustomInput
        value={email}
        onChangeText={setEmail}
        leadingIcon={
          <Mail
            size={20}
            color={'$neutral-700'}
          />
        }
        keyboardType='email-address'
      />

      <InputLabel marginTop={23}>Password</InputLabel>
      <CustomInput
        value={password}
        onChangeText={setPassword}
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
        secureTextEntry={hiddenPassword}
      />

      <LoginOptionsContainer>
        <CheckboxWithLabel
          size={24}
          label='Remember me'
        />
        <Link href={'/auth/forget-password/enter-email'}>
          <ForgetPasswordText>Forget password?</ForgetPasswordText>
        </Link>
      </LoginOptionsContainer>

      <View marginTop={62}>
        <CustomButton
          text='Sign in'
          size='small'
        />
      </View>
    </Section>
  );
};

export default LoginForm;
