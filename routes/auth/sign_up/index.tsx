import { ArrowLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import SignUpForm from './components/sign_up.form';
import LoginWith from '../login/components/login_with.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flex: 1,
  backgroundColor: '$background',
  paddingHorizontal: 20,
  paddingVertical: 24,
});

const HeaderTitle = styled(Text, {
  marginTop: 24,
  fontFamily: '$OpenSans',
  fontSize: 18,
  color: '$text-25',
});

const HeaderDescription = styled(Text, {
  marginTop: 4,
  fontFamily: '$OpenSans-Bold',
  fontSize: 18,
  color: '$text-25',
});

const SignUpPage = () => {
  const router = useRouter();

  return (
    <StyledSafeAreaView>
      <Section>
        <ArrowLeft
          size={24}
          color={'$text-25'}
          onPress={() => {
            router.back();
          }}
        />
        <HeaderTitle>Rigester your account!</HeaderTitle>
        <HeaderDescription>Join Us and Start Your Journey.🔥</HeaderDescription>

        <SignUpForm />
        <View marginTop={8}>
          <LoginWith />
        </View>
      </Section>
    </StyledSafeAreaView>
  );
};

export default SignUpPage;
