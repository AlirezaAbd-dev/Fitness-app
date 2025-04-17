import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, styled, Text, YStack } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';
import QuestionCheckboxItem from '../_components/question_checkbox_item.component';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const REASON_FOR_GOING_ON = [
  {
    name: 'Seeing physical changes in my body',
  },
  {
    name: 'To improve my appearance and body shape',
  },
  {
    name: 'To become stronger and healthier',
  },
  {
    name: 'To challenge myself and grow',
  },
  {
    name: 'Working towards a clear goal',
  },
  {
    name: 'To manage my weight and stay healthy long-term',
  },
  {
    name: 'To be inspired or inspire others',
  },
  {
    name: 'To improve my overall lifestyle',
  },
  {
    name: 'I’m not sure yet — just giving it a try',
  },
] as const;

const QuestionTitle = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-Bold',
  color: '$text-25',
});

type ItemType = (typeof REASON_FOR_GOING_ON)[number]['name'];

const Question8Page = () => {
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
          currentPage={8}
          title='Goal'
          progress={100}
          onBackPress={() => router.back()}
        />

        <YStack
          flex={1}
          marginTop={24}
          gap={24}
        >
          <QuestionTitle>
            What are you looking for on this journey?
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
              {REASON_FOR_GOING_ON.map((g) => (
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
              router.push('/auth/sign-up');
            }}
          />
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question8Page;
