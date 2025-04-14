import { BicepsFlexed, GlassWater } from '@tamagui/lucide-icons';
import React from 'react';
import { Text, View } from 'tamagui';

const TrainingCard = () => {
  return (
    <View
      width={134}
      height={134}
      backgroundColor={'$neutral-1000'}
      borderRadius={200}
      alignItems='center'
      justifyContent='center'
    >
      <View
        width={39}
        height={39}
        backgroundColor={'$text-25'}
        borderRadius={39}
        alignItems='center'
        justifyContent='center'
      >
        <BicepsFlexed
          color={'#F99CF0'}
          fill={'#F99CF0'}
          width={20}
          height={20}
        />
      </View>
      <Text
        fontSize={12}
        fontFamily={'$OpenSans-SemiBold'}
        marginTop={8}
        color={'$text-25'}
      >
        Training
      </Text>
      <Text
        fontSize={10}
        fontFamily={'$OpenSans'}
        marginTop={4}
        color={'$text-25'}
      >
        0 of 60 min
      </Text>
    </View>
  );
};

export default TrainingCard;
