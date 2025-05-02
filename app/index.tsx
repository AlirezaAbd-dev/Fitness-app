// app/index.tsx
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '@/constants/StorageKeys.constants';

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkWelcomeStatus = async () => {
      try {
        const hasSeenWelcome = await AsyncStorage.getItem(
          storageKeys.HAS_SEEN_WELCOME,
        );
        console.log(hasSeenWelcome);
        if (hasSeenWelcome === 'true') {
          router.replace('/get-started');
        } else {
          router.replace('/welcome/welcome');
        }
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
        // Fallback navigation in case of error
        router.replace('/welcome/welcome');
      } finally {
        setIsLoading(false);
      }
    };

    checkWelcomeStatus();
  }, []);

  if (isLoading) {
    // Render a loading indicator while checking AsyncStorage
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  // Optionally render null or a fallback UI
  return null;
}
