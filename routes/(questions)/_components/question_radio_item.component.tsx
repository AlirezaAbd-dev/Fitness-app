import { Check } from '@tamagui/lucide-icons';
import React from 'react';
import { Circle, styled, Text, View } from 'tamagui';

type Props = {
  title: string;
  description: string;
  isActive?: boolean;
  onPress?: () => void;
};

const Item = styled(View, {
  width: '100%',
  padding: 12,
  borderWidth: 0.5,
  borderRadius: 16,
  variants: {
    isActive: {
      true: {
        borderColor: '#E1F411',
      },
      false: {
        borderColor: '$neutral-800',
      },
    },
  } as const,
  defaultVariants: {
    isActive: false,
  },
});

const Title = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans-SemiBold',
  variants: {
    isActive: {
      true: {
        color: '#E1F411',
      },
      false: {
        color: '$text-25',
      },
    },
  } as const,
  defaultVariants: {
    isActive: false,
  },
});

const Checkbox = styled(View, {
  width: 24,
  height: 24,
  borderWidth: 1,
  borderRadius: 30,
  padding: 4,
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    isActive: {
      true: {
        borderColor: '#E1F411',
      },
      false: {
        borderColor: '$neutral-800',
      },
    },
  } as const,
  defaultVariants: {
    isActive: false,
  },
});

const Container = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Description = styled(Text, {
  marginTop: 6,
  fontSize: 12,
  fontFamily: '$OpenSans',
  paddingRight: 28,
  color: '$text-200',
});

const QuestionRadioItem = ({ isActive = false, ...props }: Props) => {
  return (
    <Item
      isActive={isActive}
      onPress={props.onPress}
    >
      <Container>
        <Title isActive={isActive}>{props.title}</Title>
        <Checkbox isActive={isActive}>
          {isActive && (
            <Circle
              backgroundColor={'#E1F411'}
              size={17}
            />
          )}
        </Checkbox>
      </Container>
      <Description>{props.description}</Description>
    </Item>
  );
};

export default QuestionRadioItem;
