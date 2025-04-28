import storageKeys from '@/constants/StorageKeys.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Text } from 'tamagui';

const home = () => {
  useEffect(() => {
    (async () => {
      console.log(await AsyncStorage.getItem(storageKeys.TOKEN));
    })();
  }, []);

  return <Text fontSize={30}>Welcome</Text>;
};

export default home;
