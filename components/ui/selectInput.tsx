// components/ui/SelectInput.tsx
import React, { useState } from 'react';
import { Input, ScrollView, Separator, styled, Text, View } from 'tamagui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';

type SelectInputProps = {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
};

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
  zIndex: 2,
});

const StyledInput = styled(Input, {
  flex: 1,
  color: '$neutral-700',
  fontFamily: '$OpenSans',
  fontSize: 18,
  padding: 0,
  borderWidth: 0,
  pointerEvents: 'none',
});

const DropdownItem = styled(Text, {
  padding: 12,
  fontSize: 16,
  fontFamily: '$OpenSans',
  color: '$text-25',
  pressStyle: {
    backgroundColor: '$neutral-900',
  },
});

const DropdownSheet = styled(View, {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: 12,
  backgroundColor: '$neutral-1000',
  borderColor: '$neutral-900',
  borderRadius: 16,
  maxHeight: 364,
  zIndex: 3,
});

const ComboboxContainer = styled(View, {
  position: 'relative',
  marginBottom: 20,
});

export const SelectInput = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select an option',
  icon,
}: SelectInputProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ComboboxContainer>
      <InputContainer onPress={() => setOpen((prev) => !prev)}>
        {icon}
        {icon && (
          <Separator
            vertical
            borderColor={'$neutral-700'}
            height={'100%'}
          />
        )}
        <StyledInput
          placeholder={placeholder}
          value={value}
          editable={false}
        />
        {open ? (
          <ChevronUp
            size={24}
            color='$neutral-700'
          />
        ) : (
          <ChevronDown
            size={24}
            color='$neutral-700'
          />
        )}
      </InputContainer>

      {open && (
        <DropdownSheet>
          <ScrollView
            paddingHorizontal={16}
            paddingVertical={4}
          >
            {options.map((option, index) => (
              <View key={option}>
                <DropdownItem
                  onPress={() => {
                    onValueChange(option);
                    setOpen(false);
                  }}
                >
                  {option}
                </DropdownItem>
                {index !== options.length - 1 && (
                  <Separator
                    borderColor={'$neutral-700'}
                    borderWidth={0.5}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </DropdownSheet>
      )}
    </ComboboxContainer>
  );
};
