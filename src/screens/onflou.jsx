import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const Onflou = () => {
  return (
    <View className={`w-full h-full flex-1 mt-30`}>
      <WebView
        source={{ uri: 'https://www.onflou.com/home' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Onflou;
