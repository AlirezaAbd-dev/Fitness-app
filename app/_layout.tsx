import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TamaguiProvider, Theme } from 'tamagui';
import { QueryProvider } from '@/providers/query.provider';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-Semibold.ttf'),
    'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: 'white' }} />;
  }

  return (
    <QueryProvider>
      <TamaguiProvider config={config}>
        <Theme name={colorScheme}>
          <Stack
            initialRouteName={'index'}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='welcome/welcome' />
            <Stack.Screen
              name='welcome/welcome-2'
              options={{ animation: 'simple_push' }}
            />
            <Stack.Screen
              name='welcome/welcome-3'
              options={{ animation: 'simple_push' }}
            />
            <Stack.Screen
              name='(questions)'
              options={{ animation: 'simple_push' }}
            />
            <Stack.Screen
              name='get-started'
              options={{ animation: 'simple_push' }}
            />
            <Stack.Screen name='auth/login' />
            <Stack.Screen name='auth/sign-up' />
            {/* <Stack.Screen name='+not-found' /> */}
          </Stack>
          <StatusBar style='dark' />
        </Theme>
      </TamaguiProvider>
    </QueryProvider>
  );
}
