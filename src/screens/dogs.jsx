import React from 'react';
import DogBox from '../components/dogBox';
import { View } from 'react-native';

const Dogs = () => {
  return (
    <View className={`flex-1 items-center justify-center h-full`}>
      <DogBox />
    </View>
  );
};

export default Dogs;
