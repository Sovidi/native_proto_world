import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const Cgn = () => {
  return (
    <View className={`w-full h-full flex-1 mt-30`}>
      <WebView
        source={{ uri: 'https://cgndev.onflou.co.kr/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Cgn;
