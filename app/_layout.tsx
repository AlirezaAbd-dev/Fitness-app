import { useFonts } from 'expo-font';
import { Stack, useRouter, useRootNavigationState } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TamaguiProvider, Theme } from 'tamagui';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

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

  const [appReady, setAppReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const prepare = async () => {
      const hasSeenWelcome = await AsyncStorage.getItem('hasSeenWelcome');
      setInitialRoute(hasSeenWelcome ? 'get-started' : 'welcome/welcome');
      setAppReady(true);
    };

    if (loaded) {
      prepare();
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded && appReady) {
      SplashScreen.hideAsync();
    }
  }, [loaded, appReady]);

  if (!loaded || !appReady || !initialRoute) {
    return <View style={{ flex: 1, backgroundColor: 'white' }} />;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <Stack
          initialRouteName={initialRoute}
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

          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='dark' />
      </Theme>
    </TamaguiProvider>
  );
}
