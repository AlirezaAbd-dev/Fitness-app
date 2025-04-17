import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, styled, Text, View, XStack, YStack } from 'tamagui';
import CaloriesCard from './components/calories_card.component';
import DrinkWaterCard from './components/drink_water_card.component';
import TrainingCard from './components/training_card.component';
import { Link } from 'expo-router';
import CustomButton from '@/components/ui/customButton';

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

const MainContent = styled(View, {
  width: '100%',
  marginTop: 24,
});

const FooterContainer = styled(View, {
  marginTop: 54,
  flex: 1,
  justifyContent: 'space-between',
});

const ReadyForChangeText = styled(Text, {
  fontSize: 20,
  color: '$text-25',
  fontFamily: '$OpenSans-Bold',
});

const DescriptionText = styled(Text, {
  fontSize: 14,
  color: '$text-25',
  fontFamily: '$OpenSans',
  marginTop: 8,
  lineHeight: 26,
  marginRight: 16,
});

const LoginText = styled(Text, {
  fontSize: 14,
  color: '$text-25',
  fontFamily: '$OpenSans',
  textAlign: 'center',
  marginTop: 20,
});

const LoginLink = styled(Text, {
  fontSize: 14,
  color: '#6B9FFF',
  fontFamily: '$OpenSans',
});

const GetStartedPage = () => {
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
        <MainContent>
          <XStack justifyContent='space-between'>
            <View
              justifyContent='flex-start'
              alignItems='center'
              gap={25}
            >
              <CaloriesCard />
              <TrainingCard />
            </View>
            <View
              justifyContent='space-between'
              alignItems='center'
              gap={27}
              marginTop={25}
            >
              <DrinkWaterCard />
              <Image
                source={require('@/assets/images/get-started-4.png')}
                width={160}
                height={180}
              />
            </View>
          </XStack>
        </MainContent>
        <FooterContainer>
          <View>
            <ReadyForChangeText>Ready for a change? 💪</ReadyForChangeText>
            <DescriptionText>
              A personalized plan for you, with all the tools you need to reach
              your goals.
            </DescriptionText>
          </View>
          <View>
            <Link
              href={'/question-1'}
              asChild
            >
              <CustomButton
                text='Get start'
                size='medium'
              />
            </Link>
            <LoginText>
              Already have an account?{' '}
              <Link
                href={'/auth/login'}
                asChild
              >
                <LoginLink>Login</LoginLink>
              </Link>
            </LoginText>
          </View>
        </FooterContainer>
      </Section>
    </StyledSafeAreaView>
  );
};

export default GetStartedPage;
