import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View, ScrollView } from 'tamagui'; // <-- import ScrollView
import LoginHeader from './components/login_header.component';
import LoginForm from './components/login.form';
import LoginWith from './components/login_with.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flexGrow: 1,
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: '#141414',
        }}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default LoginPage;
