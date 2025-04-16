import CheckboxWithLabel from '@/components/ui/checkbox';
import CustomButton from '@/components/ui/customButton';
import { KeyRound, Mail } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import React from 'react';
import { styled, Text, View, Input, Separator } from 'tamagui';

const Section = styled(View, {
  marginTop: 36,
});

const InputLabel = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans',
  color: '$text-25',
});

const InputContainer = styled(View, {
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center',
  width: '100%',
  marginTop: 12,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '$neutral-900',
  paddingVertical: 12,
  paddingHorizontal: 16,
});

const StyledInput = styled(Input, {
  keyboardType: 'visible-password',
  flex: 1,
  color: '$neutral-700',
  fontFamily: '$OpenSans',
  fontSize: 18,
  padding: 0,
  justifyContent: 'center',
  borderWidth: 0,
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
  return (
    <Section>
      <InputLabel>Email</InputLabel>
      <InputContainer>
        <Mail
          width={32}
          height={24}
          color={'$neutral-700'}
        />
        <Separator
          vertical
          borderColor={'$neutral-700'}
          height={'100%'}
        />
        <StyledInput />
      </InputContainer>

      <InputLabel marginTop={23}>Password</InputLabel>
      <InputContainer>
        <KeyRound
          width={32}
          height={24}
          color={'$neutral-700'}
        />
        <Separator
          vertical
          borderColor={'$neutral-700'}
          height={'100%'}
        />
        <StyledInput />
      </InputContainer>
      <LoginOptionsContainer>
        <CheckboxWithLabel
          size={24}
          label='Remember me'
        />
        <Link href={'/+not-found'}>
          <ForgetPasswordText>Forget password?</ForgetPasswordText>
        </Link>
      </LoginOptionsContainer>
      <View marginTop={62}>
        <CustomButton
          text='Sign in'
          size='medium'
        />
      </View>
    </Section>
  );
};

export default LoginForm;
