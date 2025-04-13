import React from 'react';
import { View } from 'tamagui';

type Props = {
  numberOfSlides: number;
  activeSlider: number;
};

const SliderIndicator = (props: Props) => {
  return (
    <View
      flexDirection='row'
      alignItems='center'
      gap={5}
    >
      {Array.from({ length: props.numberOfSlides }).map((_, index) => (
        <View
          key={index}
          width={props.activeSlider - 1 === index ? 'auto' : 13}
          height={props.activeSlider - 1 === index ? 'auto' : 13}
          borderRadius={50}
          borderColor={'#1B1919'}
          borderWidth={0.5}
          padding={props.activeSlider - 1 === index ? 4 : 0}
        >
          {props.activeSlider - 1 === index && (
            <View
              width={23}
              height={9}
              backgroundColor={'#1B1919'}
              borderRadius={50}
            ></View>
          )}
        </View>
      ))}
    </View>
  );
};

export default SliderIndicator;
