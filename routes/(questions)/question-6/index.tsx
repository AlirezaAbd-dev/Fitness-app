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
    name: 'I don’t know what to do or where to start.',
  },
  {
    name: 'my workouts feel repetitive.',
  },
  {
    name: 'I’m not seeing progress',
  },
  {
    name: 'I don’t have enough time to work out properly.',
  },
  {
    name: 'I struggle to stay consistent or motivated.',
  },
] as const;

const QuestionTitle = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
});

type ItemType = (typeof GOALS)[number]['name'];

const Question6Page = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType[]>([]);
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
          currentPage={6}
          title='Goal'
          progress={75}
          onBackPress={() => router.back()}
        />

        <YStack
          flex={1}
          marginTop={24}
          gap={24}
        >
          <QuestionTitle>
            What’s your biggest challenge at the gym?
          </QuestionTitle>

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
            size='small'
            variant={selectedItem.length > 0 ? 'primary' : 'primary-disabled'}
            disabled={selectedItem.length === 0}
            onPress={() => {
              router.push('/question-7');
            }}
          />
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question6Page;
