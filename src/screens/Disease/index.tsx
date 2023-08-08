import {View, Text} from 'react-native';
import React from 'react';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { DiseaseSTackParamList } from '@/navigation';
// import { Button } from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

// type DetailsProps = NativeStackScreenProps<DiseaseSTackParamList, 'Disease'>

const Disease = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Disease</Text>
      </View>
    </SafeAreaView>
  );
};

export default Disease;
