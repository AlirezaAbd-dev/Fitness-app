import storageKeys from '@/constants/StorageKeys.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Text } from 'tamagui';

const home = () => {
  useEffect(() => {
    (async () => {
      await AsyncStorage.getItem(storageKeys.TOKEN);
    })();
  }, []);

  return (
    <Text
      fontSize={30}
      textAlign='center'
      marginTop={100}
    >
      Welcome
    </Text>
  );
};

export default home;
