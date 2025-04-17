import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, styled, Text, View } from 'tamagui';
import { ArrowRight } from '@tamagui/lucide-icons';

// @ts-ignore
import image from '@/assets/images/welcome-1.png';
import SliderIndicator from './slider_indicator.component';
import { Link, useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';

// Styled Components
const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const StyledImageBackground = styled(ImageBackground, {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingVertical: 34,
});

const CardContainer = styled(View, {
  width: '100%',
  backgroundColor: '$color.white',
  height: 241,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 20,
});

const CenteredContent = styled(View, {
  flex: 1,
  alignItems: 'center',
});

const TitleText = styled(Text, {
  fontFamily: '$OpenSans-SemiBold',
  fontSize: 18,
});

const DescriptionText = styled(Text, {
  marginTop: 12,
  fontFamily: '$OpenSans',
  fontSize: 14,
  lineHeight: 24,
  textAlign: 'center',
  paddingHorizontal: 10,
});

const Footer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

// Component
const WelcomePage = () => {
  const router = useRouter();

  return (
    <StyledSafeAreaView>
      <StyledImageBackground source={image}>
        <CardContainer>
          <CenteredContent>
            <TitleText>A plan tailored just for you!</TitleText>
            <DescriptionText>
              Get a workout plan customized to your level, goals, and body type.
            </DescriptionText>
          </CenteredContent>
          <Footer>
            <SliderIndicator
              numberOfSlides={3}
              activeSlider={1}
            />
            <CustomButton
              text='Next'
              variant='secondary'
              size='large'
              icon={
                <ArrowRight
                  color={'$text-25'}
                  width={24}
                  height={24}
                />
              }
              iconPosition='right'
              width={166}
              onPress={() => {
                router.replace('/welcome-2');
              }}
            />
          </Footer>
        </CardContainer>
      </StyledImageBackground>
    </StyledSafeAreaView>
  );
};

export default WelcomePage;
