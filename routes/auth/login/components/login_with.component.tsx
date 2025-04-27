import React, { useEffect } from 'react';
import { Image, Separator, styled, Text, View } from 'tamagui';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';
import useLoginWithGoogleMutation from '../queries/login_with_google.mutation';

const Section = styled(View, { marginTop: 24 });
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
  const { mutate, isPending, isError, data, error } =
    useLoginWithGoogleMutation();

  const redirectUri = makeRedirectUri({
    native: 'fitness.app://redirect', // For EAS Build and production
  });

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    clientId: process.env.EXPO_PUBLIC_CLIENT_ID,
    redirectUri,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      mutate({ idToken: id_token });
    }
  }, [response, mutate]);

  const handleGoogleLogin = () => {
    promptAsync();
  };

  return (
    <Section>
      <DividerSection>
        <Separator borderColor={'$neutral-950'} />
        <DividerTitle>Or login with</DividerTitle>
        <Separator borderColor={'$neutral-950'} />
      </DividerSection>

      <LoginPlatformsContainer>
        <Button
          onPress={handleGoogleLogin}
          disabled={!request}
        >
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

      {isPending && <Text>Loading...</Text>}
      {isError && <Text>Error: {error.message}</Text>}

      {data && (
        <View>
          <Text>User Info:</Text>
          <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
      )}
    </Section>
  );
};

export default LoginWith;
