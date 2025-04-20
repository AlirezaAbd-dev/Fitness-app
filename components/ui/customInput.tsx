import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

type StyledInputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
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
  onBlur,
  placeholder,
  leadingIcon,
  trailingIcon,
  secureTextEntry,
  keyboardType,
  marginTop = 12,
}) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <View style={styles.inputContainer}>
        {leadingIcon}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onBlur={onBlur}
          placeholderTextColor='#7E91A9' // neutral-500 equivalent
        />
        {trailingIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#354050', // neutral-900 equivalent
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    color: '#566881', // neutral-700 equivalent
    fontFamily: 'OpenSans',
    fontSize: 18,
    padding: 0,
  },
});

export default CustomInput;
