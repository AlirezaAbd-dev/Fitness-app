import React from 'react';
import { TextInputAndroidProps } from 'react-native';
import { Input, Separator, View, styled } from 'tamagui';

const InputContainer = styled(View, {
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center',
  width: '100%',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '$neutral-900',
  paddingVertical: 12,
  paddingHorizontal: 16,
});

const StyledInput = styled(Input, {
  flex: 1,
  color: '$neutral-700',
  fontFamily: '$OpenSans',
  fontSize: 18,
  padding: 0,
  justifyContent: 'center',
  borderWidth: 0,
});

type StyledInputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'visible-password';
  marginTop?: number;
};

const CustomInput: React.FC<StyledInputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  leadingIcon,
  trailingIcon,
  secureTextEntry,
  keyboardType,
  marginTop = 12,
}) => {
  return (
    <View marginTop={marginTop}>
      <InputContainer>
        {leadingIcon}
        {leadingIcon && (
          <Separator
            vertical
            borderColor={'$neutral-700'}
            height={'100%'}
          />
        )}
        <StyledInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {trailingIcon}
      </InputContainer>
    </View>
  );
};

export default CustomInput;
