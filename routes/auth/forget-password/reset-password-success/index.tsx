import CustomButton from '@/components/ui/customButton';
import { useInterceptBackHandler } from '@/hooks/useInterceptBackHandler';
import { CheckCircle2 } from '@tamagui/lucide-icons';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '$background',
  paddingHorizontal: 16,
  paddingVertical: 24,
});

const IconContainer = styled(View, {
  width: 48,
  height: 48,
  marginTop: 24,
  borderRadius: 12,
  backgroundColor: '$success-600',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled(Text, {
  color: '$text-25',
  fontSize: 18,
  fontFamily: '$OpenSans-Bold',
  marginTop: 16,
});

const Description = styled(Text, {
  color: '$text-100',
  fontSize: 14,
  fontFamily: '$OpenSans',
  marginTop: 4,
  lineHeight: 24,
});

const ResetPasswordSuccessPage = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useInterceptBackHandler({
    onBack() {
      router.dismissAll();
      router.dismissTo('/auth/login');
    },
  });

  return (
    <StyledSafeAreaView>
      <Section>
        <IconContainer>
          <CheckCircle2
            size={24}
            color={'$white'}
          />
        </IconContainer>
        <Title>Successfully</Title>
        <Description>
          Valia! you nailed it you have successfully reset password for you
          account.
        </Description>

        <View marginTop={32}>
          <CustomButton
            text='Done, Go to login'
            size='small'
            onPress={() => {
              router.dismissAll();
              router.dismissTo('/auth/login');
            }}
          />
        </View>
      </Section>
    </StyledSafeAreaView>
  );
};

export default ResetPasswordSuccessPage;
