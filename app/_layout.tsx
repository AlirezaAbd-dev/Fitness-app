import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';

// Prevent the splash screen from auto-hiding before asset loading is complete.
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
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <Stack
          initialRouteName='welcome'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='welcome' />
          <Stack.Screen
            name='welcome-2'
            options={{
              animation: 'simple_push',
            }}
          />
          <Stack.Screen
            name='welcome-3'
            options={{
              animation: 'simple_push',
            }}
          />
          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='dark' />
      </Theme>
    </TamaguiProvider>
  );
}
