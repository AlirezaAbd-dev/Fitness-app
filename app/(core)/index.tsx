import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: 'white', fontSize: 40 }}>
          Hello World asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd
          asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd
          sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World
          asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd asdafdgdfhfg
          dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd sad asd asd
          dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh
          gdh gs asd sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello
          World asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd asdafdgdfhfg
          dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd sad asd asd
          dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh
          gdh gs asd sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello
          World asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd asdafdgdfhfg
          dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd sad asd asd
          dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh
          gdh gs asd sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello
          World asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd asdafdgdfhfg
          dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd sad asd asd
          dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh
          gdh gs asd sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello
          World asfasdgfdsg hfgdh gdh gs asd sad asd asd dfg df sd asdafdgdfhfg
          dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh gdh gs asd sad asd asd
          dfg df sd asdafdgdfhfg dgfdhgfjghfkjhjHello World asfasdgfdsg hfgdh
          gdh gs asd sad asd asd dfg df sd asdafdgdfhfg dgfdhgfjghfkjhj
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
