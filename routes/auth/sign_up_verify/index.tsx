import CustomButton from '@/components/ui/customButton';
import { ArrowLeft, MailOpen } from '@tamagui/lucide-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import { OtpInput } from 'react-native-otp-entry';
import { StyleSheet } from 'react-native';
import convertSecondsToMinutes from '@/utils/convertSecondsToMinutes.util';
import useCounter from '@/hooks/useCounter';
import useSignupMutation from '../sign_up/queries/signup.mutation';
import useSignupVerifyMutation from './queries/signup_verify.mutation';

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

const ResendCode = styled(Text, {
  marginTop: 24,
  color: '$text-25',
  textAlign: 'center',
  fontSize: 14,
  fontFamily: '$OpenSans',
});

const OTPContainer = styled(View, {
  marginTop: 32,
});

const SignUpVerifyPage = () => {
  const router = useRouter();
  const [counter, setCounter] = useCounter(120);

  const [OTP, setOTP] = useState('');

  const { email, name, password } = useLocalSearchParams();

  const {
    mutateAsync,
    isPending: isResendPending,
    error: resendError,
  } = useSignupMutation(false);

  const { mutate, isPending, error } = useSignupVerifyMutation();

  function onSubmitHandler() {
    if (OTP.length === 5) {
      mutate({
        email: email as string,
        code: OTP,
      });
    }
  }

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
          <EmailEntered>{email}</EmailEntered>

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
              onFilled={() => {
                onSubmitHandler();
              }}
            />
          </OTPContainer>
        </View>
        <View>
          <Text
            marginBottom={4}
            fontFamily='$OpenSans'
            fontSize={12}
            color='$error-500'
            textAlign='center'
          >
            {resendError?.response?.data.message ||
              error?.response?.data.message}
          </Text>
          <CustomButton
            text='Verify'
            size='small'
            onPress={() => {
              onSubmitHandler();
            }}
            isPending={isResendPending || isPending}
            disabled={isResendPending || OTP.length < 5 || isPending}
          />
          {counter > 0 ? (
            <ResendCode>
              Resend Code ({convertSecondsToMinutes(counter)})
            </ResendCode>
          ) : (
            <ResendCode>
              Did not receive the code?{' '}
              <ResendCode
                color={'#E1F411'}
                onPress={async () => {
                  await mutateAsync({
                    email: email as string,
                    name: name as string,
                    password: password as string,
                  });

                  setCounter(120);
                }}
              >
                Resend code
              </ResendCode>
            </ResendCode>
          )}
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

export default SignUpVerifyPage;
