import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, ScrollView, Touchable, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20, backgroundColor: 'white' }}>
        <Text style={{ color: 'black', fontSize: 40 }}>
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
        <View>
          <Pressable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: 'blue',
              borderRadius: 10,
              marginBottom: 50,
              elevation: 5,
            }}
            android_ripple={{ color: 'red' }}
          >
            <Text style={{ color: 'black', fontSize: 24 }}>Hello World!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
