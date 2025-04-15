import { Check } from '@tamagui/lucide-icons';
import React from 'react';
import { styled, Text, View } from 'tamagui';

type Props = {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
};

const Item = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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
  borderRadius: 8,
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

const QuestionCheckboxItem = ({ isActive = false, ...props }: Props) => {
  return (
    <Item
      isActive={isActive}
      onPress={props.onPress}
    >
      <Title isActive={isActive}>{props.title}</Title>
      <Checkbox isActive={isActive}>
        {isActive && (
          <Check
            color={'#E1F411'}
            size={16}
          />
        )}
      </Checkbox>
    </Item>
  );
};

export default QuestionCheckboxItem;
