import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

type Props = {
  name?: string;
};

const Demo = (props: Props) => {
  useEffect(() => {
    console.log('props', props);
  }, []);

  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

export default Demo;
