import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, styled, Text, View, YStack } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import QuestionCheckboxItem from '../_components/question_checkbox_item.component';
import QuestionRadioItem from '../_components/question_radio_item.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const GOALS = [
  {
    name: 'Beginner',
    description: 'New to working out or coming back after a long break.',
  },
  {
    name: 'Intermediate',
    description: 'Work out regularly and familiar with basic exercises.',
  },
  {
    name: 'Advanced',
    description: 'Train consistently, comfortable with advanced routines.',
  },
  {
    name: 'Not sure / I’ll decide later',
    description: 'Help me choose based on my goals.',
  },
] as const;

const QuestionTitle = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
});

type GenderType = (typeof GOALS)[number]['name'];

const Question3Page = () => {
  const [selectedItem, setSelectedItem] = useState<GenderType>();
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
          currentPage={3}
          title='Goal'
          progress={36}
          onBackPress={() => router.back()}
        />

        <YStack
          flex={1}
          marginTop={24}
          space={24}
        >
          <QuestionTitle>Choose your fitness level? </QuestionTitle>

          {/* Scrollable content area */}
          <YStack
            flex={1}
            gap={16}
          >
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 20,
                gap: 16,
              }}
              showsVerticalScrollIndicator={false}
            >
              {GOALS.map((g) => (
                <QuestionRadioItem
                  key={g.name}
                  title={g.name}
                  description={g.description}
                  isActive={g.name === selectedItem}
                  onPress={() => setSelectedItem(g.name)}
                />
              ))}
            </ScrollView>
          </YStack>

          <CustomButton
            text='Next'
            size='small'
            variant={selectedItem ? 'primary' : 'primary-disabled'}
            disabled={!selectedItem}
            onPress={() => {
              router.push('/question-4');
            }}
          />
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question3Page;
