import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import LoginHeader from './components/login_header.component';
import LoginForm from './components/login.form';
import LoginWith from './components/login_with.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flex: 1,
  backgroundColor: '#141414',
  paddingHorizontal: 20,
  paddingBottom: 20,
});

const LogoContainer = styled(View, {
  width: '100%',
  marginTop: 24,
  height: 64,
  alignItems: 'center',
  justifyContent: 'center',
});

const LoginPage = () => {
  return (
    <StyledSafeAreaView>
      <Section>
        <LogoContainer>
          <Text
            color={'$text-25'}
            fontFamily={'$OpenSans-SemiBold'}
            fontSize={16}
          >
            Logo
          </Text>
        </LogoContainer>
        <LoginHeader />
        <LoginForm />
        <LoginWith />
      </Section>
    </StyledSafeAreaView>
  );
};

export default LoginPage;
