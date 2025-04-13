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
    </Stack>
  );
};

export default QuestionLayout;
