import { Check } from '@tamagui/lucide-icons';
import { Checkbox, CheckboxProps, Label, XStack } from 'tamagui';

export default function CheckboxWithLabel({
  size,
  label,
  labelGap = 8,
  ...checkboxProps
}: CheckboxProps & { label?: string; size: number; labelGap?: number }) {
  const id = `checkbox-${(size || '').toString().slice(1)}`;
  return (
    <XStack
      alignItems='center'
      gap={labelGap}
    >
      <Checkbox
        id={id}
        width={size}
        height={size}
        backgroundColor={'$neutral-950'}
        borderRadius={8}
        {...checkboxProps}
      >
        <Checkbox.Indicator>
          <Check
            size={size - 4}
            color={'$neutral-300'}
          />
        </Checkbox.Indicator>
      </Checkbox>

      <Label
        size={size}
        fontSize={14}
        fontFamily={'$OpenSans'}
        color={'$text-50'}
        htmlFor={id}
      >
        {label}
      </Label>
    </XStack>
  );
}
