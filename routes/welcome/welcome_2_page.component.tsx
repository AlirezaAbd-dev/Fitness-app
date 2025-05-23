import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';

// @ts-ignore
import image from '@/assets/images/welcome-2.png';
import SliderIndicator from './components/slider_indicator.component';
import { Link, useNavigation, useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import { useInterceptBackHandler } from '@/hooks/useInterceptBackHandler';

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
  fontFamily: '$OpenSans-SemiBold',
  color: '$text-1000',
  fontSize: 18,
});

const DescriptionText = styled(Text, {
  marginTop: 12,
  fontFamily: '$OpenSans',
  fontSize: 14,
  lineHeight: 24,
  textAlign: 'center',
  paddingHorizontal: 10,
  color: '$text-1000',
});

const Footer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const Welcome2Page = () => {
  const router = useRouter();

  const { setShouldBlock } = useInterceptBackHandler({
    onBack: () => {
      router.replace('/welcome/welcome');
    },
  });

  return (
    <StyledSafeAreaView>
      <StyledImageBackground source={image}>
        <ArrowLeft
          color={'white'}
          onTouchStart={() => {
            router.replace('/welcome/welcome');
          }}
        />
        <CardContainer>
          <CenteredContent>
            <TitleText>See your progress, stay motivated!</TitleText>
            <DescriptionText>
              Log your weight, body fat, muscle growth, and workout records to
              track your transformation.
            </DescriptionText>
          </CenteredContent>
          <Footer>
            <SliderIndicator
              numberOfSlides={3}
              activeSlider={2}
            />
            <Link
              href={'/welcome/welcome-3'}
              asChild
              replace
            >
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
                width={150}
                onPress={() => {
                  setShouldBlock(false);
                  router.replace('/welcome/welcome-3');
                }}
              />
            </Link>
          </Footer>
        </CardContainer>
      </StyledImageBackground>
    </StyledSafeAreaView>
  );
};

export default Welcome2Page;
