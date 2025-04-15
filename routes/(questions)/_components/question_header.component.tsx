import { ArrowLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Progress, styled, Text, View } from 'tamagui';

type Props = {
  title: string;
  allPages: number;
  currentPage: number;
  progress: number;
  onBackPress?: () => void;
};

const MainSection = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HeaderTitle = styled(Text, {
  fontSize: 16,
  fontFamily: '$OpenSans-SemiBold',
  color: '$text-25',
});

const Skip = styled(Text, {
  fontSize: 14,
  fontFamily: '$OpenSans',
  color: '$text-25',
});

const QuestionHeader = (props: Props) => {
  return (
    <View>
      <MainSection>
        <ArrowLeft
          width={24}
          height={24}
          color={'$text-25'}
          onPress={() => {
            if (props.onBackPress) props.onBackPress();
          }}
        />
        <HeaderTitle>
          {props.title} (<Text color={'#E1F411'}>{props.currentPage}</Text>/
          {props.allPages})
        </HeaderTitle>
        <Skip>Skip</Skip>
      </MainSection>

      <Progress
        value={props.progress}
        backgroundColor={'$neutral-50'}
        height={4}
        borderRadius={0}
        marginTop={24}
      >
        <Progress.Indicator backgroundColor={'#E1F411'} />
      </Progress>
    </View>
  );
};

export default QuestionHeader;
