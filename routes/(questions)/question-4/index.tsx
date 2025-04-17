import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, styled, Text, View, XStack, YStack } from 'tamagui';
import QuestionHeader from '../_components/question_header.component';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/ui/customButton';

const StyledSafeAreaView = styled(SafeAreaView, {
  flex: 1,
});

const BODY_PARTS = [
  [
    {
      name: 'biceps',
      image: require('@/assets/images/body-parts/arms.png'),
    },
    {
      name: 'chest',
      image: require('@/assets/images/body-parts/chest.png'),
    },
    {
      name: 'legs',
      image: require('@/assets/images/body-parts/legs.png'),
    },
  ],
  [
    {
      name: 'abs',
      image: require('@/assets/images/body-parts/abs.png'),
    },
    {
      name: 'forearm',
      image: require('@/assets/images/body-parts/forearm.png'),
    },
    {
      name: 'triceps',
      image: require('@/assets/images/body-parts/triceps.png'),
    },
  ],
  [
    {
      name: 'back',
      image: require('@/assets/images/body-parts/back.png'),
    },
    {
      name: 'calf',
      image: require('@/assets/images/body-parts/calf.png'),
    },
    {
      name: 'glutes',
      image: require('@/assets/images/body-parts/glutes.png'),
    },
  ],
] as const;

const Section = styled(View, {
  flex: 1,
  width: '100%',
  padding: 20,
  backgroundColor: '#141414',
  paddingBottom: 20,
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

type BodyPartTyped = (typeof BODY_PARTS)[number][number]['name'];

const Question4Page = () => {
  const [selectedItems, setSelectedItems] = useState<BodyPartTyped[]>([]);
  const router = useRouter();

  const toggleItem = (bodyPartName: BodyPartTyped) => {
    setSelectedItems((prev) =>
      prev.includes(bodyPartName)
        ? prev.filter((item) => item !== bodyPartName)
        : [...prev, bodyPartName],
    );
  };

  return (
    <StyledSafeAreaView>
      <Section>
        <QuestionHeader
          allPages={8}
          currentPage={4}
          title='Focus Areas'
          progress={50}
          onBackPress={() => router.back()}
        />

        <MainContainer>
          <QuestionSection>
            <QuestionTitle>Choose your focus areas?</QuestionTitle>

            {/* Scrollable Content Area */}
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 80, // Extra space for button
              }}
              showsVerticalScrollIndicator={false}
            >
              <YStack
                gap={16}
                width='100%'
                marginTop={24}
              >
                {BODY_PARTS.map((row, rowIndex) => (
                  <XStack
                    key={`row-${rowIndex}`}
                    gap={16}
                  >
                    {row.map((bodyPart) => (
                      <View
                        key={bodyPart.name}
                        flex={1}
                        height={180}
                        borderWidth={1}
                        borderColor={
                          selectedItems.includes(bodyPart.name)
                            ? '#E1F411'
                            : '$neutral-900'
                        }
                        borderRadius={16}
                        justifyContent='center'
                        alignItems='center'
                        padding={12}
                        onPress={() => toggleItem(bodyPart.name)}
                        pressStyle={{ opacity: 0.8 }} // Visual feedback
                      >
                        <Image
                          source={bodyPart.image}
                          width={'100%'}
                          height={112}
                          objectFit='contain'
                        />
                        <Text
                          marginTop={16}
                          fontSize={16}
                          fontFamily={
                            selectedItems.includes(bodyPart.name)
                              ? '$OpenSans-Bold'
                              : '$OpenSans'
                          }
                          color={
                            selectedItems.includes(bodyPart.name)
                              ? '#E1F411'
                              : 'white'
                          }
                        >
                          {bodyPart.name}
                        </Text>
                      </View>
                    ))}
                  </XStack>
                ))}
              </YStack>
            </ScrollView>
          </QuestionSection>

          {/* Fixed Button at Bottom */}
          <CustomButton
            text='Next'
            size='medium'
            variant={selectedItems.length > 0 ? 'primary' : 'primary-disabled'}
            disabled={selectedItems.length === 0}
            onPress={() => router.push('/question-5')}
          />
        </MainContainer>
      </Section>
    </StyledSafeAreaView>
  );
};

export default Question4Page;
