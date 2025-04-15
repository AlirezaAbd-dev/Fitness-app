import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, Text, View } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const GENDERS = [
  {
    name: 'male',
  },
  {
    name: 'female',
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

const Genders = styled(View, {
  flexDirection: 'row',
  width: '100%',
  gap: 20,
  paddingTop: 24,
});

const GenderItem = styled(View, {
  flex: 1,
  height: 212,
  backgroundColor: '$neutral-1000',
  borderRadius: 8,
});

type GenderType = (typeof GENDERS)[number]['name'];

const Question1Page = () => {
  const [selectedGender, setSelectedGender] = useState<GenderType>();

  const router = useRouter();

  return (
    <StyledSafeAreaView>
      <Section>
        <QuestionHeader
          allPages={8}
          currentPage={1}
          title='Gender'
          progress={12}
          onBackPress={() => {
            router.back();
          }}
        />

        <MainContainer>
          <QuestionSection>
            <QuestionTitle>What’s your gender?</QuestionTitle>
            <Genders>
              {GENDERS.map((g) => (
                <GenderItem
                  key={g.name}
                  borderWidth={g.name === selectedGender ? 0.5 : 0}
                  borderColor={
                    g.name === selectedGender ? '#E1F411' : 'transparent'
                  }
                  onPress={() => {
                    setSelectedGender(g.name);
                  }}
                ></GenderItem>
              ))}
            </Genders>
          </QuestionSection>

          <CustomButton
            text='Next'
            size='medium'
            variant={!!selectedGender ? 'primary' : 'primary-disabled'}
            disabled={!!selectedGender ? false : true}
            onPress={() => {
              router.push('/question-2');
            }}
          />
        </MainContainer>
      </Section>
    </StyledSafeAreaView>
  );
};

export default Question1Page;
