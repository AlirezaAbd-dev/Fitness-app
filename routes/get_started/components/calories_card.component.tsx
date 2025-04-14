import { Zap } from '@tamagui/lucide-icons';
import React from 'react';
import { Text, View } from 'tamagui';
import CircularProgressBar from '../progressbar';
import { Easing } from 'react-native';

const CaloriesCard = () => {
  return (
    <View
      width={166}
      backgroundColor={'$neutral-1000'}
      alignItems='center'
      borderRadius={20}
      padding={16}
      gap={16}
    >
      <View
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        width={'100%'}
      >
        <Text
          fontSize={14}
          fontFamily={'$OpenSans-SemiBold'}
          color={'$text-25'}
        >
          Calories (Kcal)
        </Text>
        <Zap
          color={'#E1F411'}
          backgroundClip={'#E1F411'}
          strokeWidth={2}
          fill='currentColor'
          width={20}
          height={20}
        />
      </View>
      <CircularProgressBar
        progress={25}
        size={118}
        strokeWidth={12}
        backgroundColor='#3B3B3D'
        progressColor='#E1F411'
        duration={1000}
        easing={Easing.bounce}
      >
        <View
          alignItems='center'
          gap={2}
        >
          <Text
            fontSize={14}
            fontFamily={'$OpenSans-Bold'}
            color={'$text-25'}
          >
            475
          </Text>
          <Text
            fontSize={14}
            fontFamily={'$OpenSans'}
            color={'$text-25'}
          >
            of
          </Text>
          <Text
            fontSize={14}
            fontFamily={'$OpenSans'}
            color={'$text-25'}
          >
            1900
          </Text>
        </View>
      </CircularProgressBar>
    </View>
  );
};

export default CaloriesCard;
