import CustomButton from '@/components/ui/customButton';
import CustomInput from '@/components/ui/customInput';
import { EyeOff, KeyRound, Mail, User } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { styled, Text, View } from 'tamagui';

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Section>
      <InputLabel>Username</InputLabel>
      <CustomInput
        value={username}
        onChangeText={setUsername}
        leadingIcon={
          <User
            size={20}
            color={'$neutral-700'}
          />
        }
        keyboardType='default'
      />
      <InputLabel marginTop={20}>Email</InputLabel>
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
      <InputLabel marginTop={20}>Password</InputLabel>
      <CustomInput
        value={password}
        onChangeText={setPassword}
        leadingIcon={
          <KeyRound
            size={20}
            color={'$neutral-700'}
          />
        }
        keyboardType='email-address'
        trailingIcon={
          <EyeOff
            size={20}
            color={'$neutral-700'}
          />
        }
      />

      <MaximumCharacters>Minimum 6 characters </MaximumCharacters>

      <View marginTop={24}>
        <CustomButton
          text='Sign up'
          size='medium'
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
