import { Dumbbell, Ham, Users } from '@tamagui/lucide-icons';
import React from 'react';
import { styled, Text, View } from 'tamagui';

const ContentContainer = styled(View, {
  marginTop: 24,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Title = styled(Text, {
  flex: 1,
  fontSize: 24,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
  lineHeight: 38,
});

const IconsContainer = styled(View, {
  flex: 1,
  alignItems: 'center',
});

const InnerIconsContainer = styled(View, {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const LoginHeader = () => {
  return (
    <ContentContainer>
      <Title>Let’s get you signed in!</Title>
      <IconsContainer>
        <InnerIconsContainer justifyContent='center'>
          <View
            padding={17}
            borderWidth={0.5}
            borderRadius={60}
            borderColor={'$neutral-700'}
            backgroundColor={'$neutral-1000'}
          >
            <Ham
              color={'#E1F411'}
              width={24}
              height={24}
            />
          </View>
        </InnerIconsContainer>
        <InnerIconsContainer>
          <View
            padding={17}
            borderWidth={0.5}
            borderRadius={60}
            borderColor={'$neutral-700'}
            backgroundColor={'$neutral-1000'}
          >
            <Dumbbell
              color={'#F99CF0'}
              width={24}
              height={24}
            />
          </View>
          <View
            padding={17}
            borderWidth={0.5}
            borderRadius={60}
            borderColor={'$neutral-700'}
            backgroundColor={'$neutral-1000'}
          >
            <Users
              color={'#6B9FFF'}
              width={24}
              height={24}
            />
          </View>
        </InnerIconsContainer>
      </IconsContainer>
    </ContentContainer>
  );
};

export default LoginHeader;
