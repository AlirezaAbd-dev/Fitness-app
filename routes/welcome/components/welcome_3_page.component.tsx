import React, { useRef } from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';

// @ts-ignore
import image from '@/assets/images/welcome-3.png';
import SliderIndicator from './slider_indicator.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const Welcome3Page = () => {
  // const hasRedirectedRef = useRef(false);
  const router = useRouter();

  const { setShouldBlock } = useInterceptBackHandler({
    onBack: () => {
      router.replace('/welcome-2');
    },
  });

  return (
    <StyledSafeAreaView>
      <StyledImageBackground source={image}>
        <ArrowLeft
          color={'white'}
          onTouchStart={() => {
            router.replace('/welcome-2');
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
              onPress={async () => {
                setShouldBlock(false);
                await AsyncStorage.setItem('hasSeenWelcome', 'true');
                router.replace('/get-started');
              }}
            />
          </Footer>
        </CardContainer>
      </StyledImageBackground>
    </StyledSafeAreaView>
  );
};

export default Welcome3Page;
