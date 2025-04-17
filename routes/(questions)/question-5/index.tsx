import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, styled, Text, Separator } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import { Calendar, Clock } from '@tamagui/lucide-icons';
import { SelectInput } from '@/components/ui/selectInput';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const DAYS = [
  '1 day',
  '2 days',
  '3 days',
  '4 days',
  '5 days',
  '6 days',
  '7 days',
];

const TIME = [
  '15-30 Minutes',
  '30-45 Minutes',
  '45-60 Minutes',
  'More than 1 hour',
];

const QuestionTitle = styled(Text, {
  fontSize: 16,
  lineHeight: 26,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
});

const DaysInWeekText = styled(Text, {
  fontFamily: '$OpenSans',
  fontSize: 14,
  color: '$text-25',
  marginTop: 20,
  marginBottom: 12,
});

const HoursInDayText = styled(Text, {
  fontFamily: '$OpenSans',
  fontSize: 14,
  color: '$text-25',
  marginTop: 20,
});

const Question5Page = () => {
  const [selectedDays, setSelectedDays] = useState<string>('');
  const [selectedHours, setSelectedHours] = useState<string>('');
  const router = useRouter();

  return (
    <StyledSafeAreaView>
      <YStack
        flex={1}
        padding={20}
        backgroundColor='#141414'
      >
        <QuestionHeader
          allPages={8}
          currentPage={5}
          title='Goal'
          progress={63}
          onBackPress={() => router.back()}
        />

        <YStack
          flex={1}
          marginTop={24}
        >
          <QuestionTitle>
            How many days a week can you commit to working out?
          </QuestionTitle>

          <DaysInWeekText>Days a week</DaysInWeekText>
          <SelectInput
            options={DAYS}
            value={selectedDays}
            onValueChange={setSelectedDays}
            icon={
              <Calendar
                width={32}
                height={24}
                color='$neutral-700'
              />
            }
          />

          <Separator
            borderColor={'$neutral-700'}
            width={'100%'}
            marginVertical={24}
          />

          <YStack flex={1}>
            <QuestionTitle>
              How much time can you spend on each workout?
            </QuestionTitle>

            <HoursInDayText>Hours a day</HoursInDayText>
            <SelectInput
              options={TIME}
              value={selectedHours}
              onValueChange={setSelectedHours}
              icon={
                <Clock
                  width={32}
                  height={24}
                  color='$neutral-700'
                />
              }
              containerStyle={{
                marginTop: 12,
              }}
            />
          </YStack>
        </YStack>

        <CustomButton
          text='Next'
          size='small'
          variant={
            selectedDays && selectedHours ? 'primary' : 'primary-disabled'
          }
          disabled={!selectedDays || !selectedHours}
          onPress={() => router.push('/question-6')}
        />
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question5Page;
