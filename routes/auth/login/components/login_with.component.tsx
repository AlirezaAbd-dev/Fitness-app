import React from 'react';
import { Image, Separator, styled, Text, View } from 'tamagui';

const Section = styled(View, {
  marginTop: 24,
});

const DividerSection = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  justifyContent: 'center',
});

const DividerTitle = styled(Text, {
  fontFamily: '$OpenSans-SemiBold',
  fontSize: 12,
  color: '$text-25',
});

const LoginPlatformsContainer = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  justifyContent: 'center',
  marginTop: 24,
});

const Button = styled(View, {
  flex: 1,
  height: 48,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '$neutral-900',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
});

const LoginWith = () => {
  return (
    <Section>
      <DividerSection>
        <Separator borderColor={'$neutral-950'} />
        <DividerTitle>Or login with</DividerTitle>
        <Separator borderColor={'$neutral-950'} />
      </DividerSection>

      <LoginPlatformsContainer>
        <Button>
          <Image
            source={require('@/assets/images/google-icon-logo.png')}
            width={20}
            height={20}
          />
          <Text
            fontSize={14}
            fontFamily={'$OpenSans'}
            color={'$text-25'}
          >
            Google
          </Text>
        </Button>
        <Button>
          <Image
            source={require('@/assets/images/apple-black-logo.png')}
            width={16.28}
            height={20}
          />
          <Text
            fontSize={14}
            fontFamily={'$OpenSans'}
            color={'$text-25'}
          >
            Apple
          </Text>
        </Button>
      </LoginPlatformsContainer>
    </Section>
  );
};

export default LoginWith;
