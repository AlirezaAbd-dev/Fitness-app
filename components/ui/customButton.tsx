import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';
import { styled, Text, View, Button as TamaguiButton } from 'tamagui';

type ButtonVariant = 'primary' | 'secondary' | 'primary-disabled';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  width?: any;
  disabled?: boolean;
  isPending?: boolean; // <-- Added isPending prop
}

// Styled Components
const StyledButton = styled(TamaguiButton, {
  width: '100%',
  borderRadius: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand-25',
        pressStyle: {
          backgroundColor: '$brand-50',
        },
      },
      secondary: {
        backgroundColor: '$text-1000',
        pressStyle: {
          backgroundColor: '$black',
        },
      },
      'primary-disabled': {
        backgroundColor: '$brand-400',
      },
    },
    size: {
      small: {
        height: 44,
      },
      medium: {
        height: 46,
      },
      large: {
        height: 48,
      },
    },
  } as const,
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const StyledText = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-SemiBold',
  variants: {
    variant: {
      primary: {
        color: '$text-1000',
      },
      secondary: {
        color: '$text-25',
      },
      'primary-disabled': {
        color: '$text-1000',
      },
    },
  } as const,
});

// Component
const CustomButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  text,
  onPress,
  icon,
  iconPosition = 'left',
  width = '100%',
  disabled = false,
  isPending = false, // <-- Default value for isPending
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onPress={onPress}
      width={width}
      disabled={disabled || isPending} // disable the button if pending
    >
      {isPending ? (
        <ActivityIndicator
          color={variant === 'secondary' ? 'white' : 'black'}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View>{icon}</View>}
          <StyledText variant={variant}>{text}</StyledText>
          {icon && iconPosition === 'right' && <View>{icon}</View>}
        </>
      )}
    </StyledButton>
  );
};

export default CustomButton;
