import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack
      initialRouteName='login'
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}
    >
      <Stack.Screen
        name='login'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='sign-up'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='sign-up-verify'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='forget-password/enter-email'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='forget-password/enter-code'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='forget-password/reset-password'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='forget-password/reset-password-success'
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default AuthLayout;
