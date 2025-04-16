import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, styled, Text, View, YStack } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import QuestionCheckboxItem from '../_components/question_checkbox_item.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const GOALS = [
  {
    name: 'Beginner',
  },
  {
    name: 'Gain muscle',
  },
  {
    name: 'BegiGet fitter / tone upnner',
  },
  {
    name: 'Maintain current shape',
  },
  {
    name: 'Increase strength',
  },
  {
    name: 'Improve endurance',
  },
  {
    name: 'Improve flexibility / mobility',
  },
  {
    name: 'Post-injury recovery',
  },
  {
    name: 'Improve overall health',
  },
] as const;

const QuestionTitle = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
});

type GenderType = (typeof GOALS)[number]['name'];

const Question5Page = () => {
  const [selectedItem, setSelectedItem] = useState<GenderType[]>([]);
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
          currentPage={2}
          title='Goal'
          progress={24}
          onBackPress={() => router.back()}
        />

        <YStack
          flex={1}
          marginTop={24}
          gap={24}
        >
          <QuestionTitle>What's your main fitness goal?</QuestionTitle>

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
                <QuestionCheckboxItem
                  key={g.name}
                  title={g.name}
                  isActive={
                    selectedItem ? selectedItem.includes(g.name) : false
                  }
                  onPress={() =>
                    setSelectedItem((prev) => {
                      const findIndex = prev.findIndex((p) => p === g.name);

                      if (findIndex === -1) {
                        prev.push(g.name);
                      } else {
                        prev.splice(findIndex, 1);
                      }

                      return [...prev];
                    })
                  }
                />
              ))}
            </ScrollView>
          </YStack>

          <CustomButton
            text='Next'
            size='medium'
            variant={selectedItem.length > 0 ? 'primary' : 'primary-disabled'}
            disabled={selectedItem.length === 0}
            onPress={() => {
              router.push('/question-3');
            }}
          />
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question5Page;
