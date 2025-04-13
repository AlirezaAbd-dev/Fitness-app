import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';

// @ts-ignore
import image from '@/assets/images/welcome-3.png';
import SliderIndicator from './slider_indicator.component';
import { Link, useNavigation } from 'expo-router';

// Styled Components
const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const StyledImageBackground = styled(ImageBackground, {
  flex: 1,
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingVertical: 34,
  paddingTop: 16,
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
  fontFamily: '$OpenSans',
  fontSize: 18,
  fontWeight: 'bold',
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

const NextButton = styled(View, {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  paddingHorizontal: 48,
  paddingVertical: 16,
  backgroundColor: '#201E1E',
  borderRadius: 16,
});

const NextButtonText = styled(Text, {
  fontFamily: '$OpenSans',
  fontSize: 16,
  color: '$white',
  fontWeight: 700,
});

const Welcome3Page = () => {
  const navigation = useNavigation();

  return (
    <StyledSafeAreaView>
      <StyledImageBackground source={image}>
        <ArrowLeft
          color={'white'}
          onTouchStart={() => {
            navigation.goBack();
          }}
        />
        <CardContainer>
          <CenteredContent>
            <TitleText>Train with experts, stay inspired!</TitleText>
            <DescriptionText>
              Get guidance from professional coaches and connect with other
              fitness enthusiasts.
            </DescriptionText>
          </CenteredContent>
          <Footer>
            <SliderIndicator
              numberOfSlides={3}
              activeSlider={3}
            />
            <Link
              href={'/welcome-2'}
              asChild
            >
              <NextButton>
                <NextButtonText>Next</NextButtonText>
                <ArrowRight color={'white'} />
              </NextButton>
            </Link>
          </Footer>
        </CardContainer>
      </StyledImageBackground>
    </StyledSafeAreaView>
  );
};

export default Welcome3Page;
