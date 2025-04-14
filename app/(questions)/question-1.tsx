import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text } from 'tamagui';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const Question1 = () => {
  return <StyledSafeAreaView>Test1</StyledSafeAreaView>;
};

export default Question1;
