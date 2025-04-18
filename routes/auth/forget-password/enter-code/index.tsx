import CustomButton from '@/components/ui/customButton';
import { ArrowLeft, MailOpen } from '@tamagui/lucide-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import { OtpInput } from 'react-native-otp-entry';
import { StyleSheet } from 'react-native';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Section = styled(View, {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: '$background',
  paddingHorizontal: 16,
  paddingVertical: 24,
});

const IconContainer = styled(View, {
  width: 48,
  height: 48,
  marginTop: 24,
  borderRadius: 12,
  backgroundColor: 'white',
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
});

const EmailEntered = styled(Text, {
  color: '$text-25',
  fontSize: 14,
  fontFamily: '$OpenSans-SemiBold',
  marginTop: 4,
});

const AlreadyHaveAccountText = styled(Text, {
  marginTop: 24,
  color: '$text-25',
  textAlign: 'center',
  fontSize: 14,
  fontFamily: '$OpenSans',
});

const OTPContainer = styled(View, {
  marginTop: 32,
});

const EnterCodePage = () => {
  const [OTP, setOTP] = useState('');

  const { email: EmailPassed } = useLocalSearchParams();

  const router = useRouter();

  return (
    <StyledSafeAreaView>
      <Section>
        <View>
          <ArrowLeft
            size={24}
            color={'$text-25'}
            onPress={() => {
              router.back();
            }}
          />
          <IconContainer>
            <MailOpen
              size={24}
              color={'$neutral-950'}
            />
          </IconContainer>
          <Title>Verification code</Title>
          <Description>Please enter the OTP sent to</Description>
          <EmailEntered>{EmailPassed}</EmailEntered>

          <OTPContainer>
            <OtpInput
              numberOfDigits={5}
              onTextChange={(text) => {
                setOTP(text);
              }}
              theme={{
                pinCodeContainerStyle: OTPStyles.pinCodeContainerStyle,
                focusedPinCodeContainerStyle:
                  OTPStyles.focusedPinCodeContainerStyle,
                pinCodeTextStyle: OTPStyles.pinCodeTextStyle,
                focusStickStyle: OTPStyles.focusStickStyle,
              }}
            />
          </OTPContainer>
        </View>
        <View>
          <CustomButton
            text='Next'
            size='small'
            onPress={() => {
              router.push('/auth/forget-password/reset-password');
            }}
          />
          <AlreadyHaveAccountText>Resend Code (1:59)</AlreadyHaveAccountText>
        </View>
      </Section>
    </StyledSafeAreaView>
  );
};

const OTPStyles = StyleSheet.create({
  pinCodeContainerStyle: {
    width: 58,
    height: 58,
    borderWidth: 0,
    backgroundColor: '#354050',
  },
  focusedPinCodeContainerStyle: {
    borderWidth: 1,
    borderColor: '#AFBBCA',
  },
  pinCodeTextStyle: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
  focusStickStyle: {
    backgroundColor: 'white',
  },
});

export default EnterCodePage;
