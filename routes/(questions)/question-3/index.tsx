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

const Section = styled(View, {
  flex: 1,
  width: '100%',
  padding: 20,
  backgroundColor: '#141414',
  paddingBottom: 50,
});

const MainContainer = styled(View, {
  flex: 1,
  marginTop: 24,
  justifyContent: 'space-between',
});

const QuestionSection = styled(View, {
  flex: 1,
});

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
                <QuestionCheckboxItem
                  key={g.name}
                  title={g.name}
                  isActive={g.name === selectedItem}
                  onPress={() => setSelectedItem(g.name)}
                />
              ))}
            </ScrollView>
          </YStack>

          <CustomButton
            text='Next'
            size='medium'
            variant={selectedItem ? 'primary' : 'primary-disabled'}
            disabled={!selectedItem}
            onPress={() => {
              router.push('/question-3');
            }}
          />
        </YStack>
      </YStack>
    </StyledSafeAreaView>
  );
};

export default Question3Page;
