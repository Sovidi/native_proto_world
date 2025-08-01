import React, { useEffect, useState } from 'react';
import ChatList from '../components/chatList';
import { Pressable, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <ChatList navigation={navigation} />
    </View>
  );
};

export default Home;
