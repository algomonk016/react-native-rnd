import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  name?: string;
}


const a = 12;

const Demo = (props: Props) => 
{
  console.log(
    'props', 
    props
  );
  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

export default Demo;