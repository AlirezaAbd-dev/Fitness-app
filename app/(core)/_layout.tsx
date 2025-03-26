import { Stack } from 'expo-router';
import React from 'react';

const CoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  );
};

export default CoreLayout;
