import { Stack } from 'expo-router';
import React from 'react';

const QuestionLayout = () => {
  return (
    <Stack
      initialRouteName='question-1'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='question-1'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-2'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-3'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-4'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-5'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-6'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-7'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='question-8'
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default QuestionLayout;
