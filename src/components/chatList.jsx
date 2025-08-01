import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import useFetchComp from '../hooks/fetchComp';
import useWebsocketFetchComp from '../hooks/websocketFetchComp';
import ChatBox from './chatBox';
import useScrollCounter from '../hooks/useScrollCounter';

const ChatList = ({ navigation }) => {
  const { data, fetchFn } = useFetchComp();
  const { chatData, socket } = useWebsocketFetchComp();
  const { isScrolled, counting } = useScrollCounter();
  const [reversedChatData, setReversedChatData] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchFn('GET');
  }, []);

  useEffect(() => {
    if (chatData.length > 0) {
      setReversedChatData(chatData.slice().reverse());
    }
  }, [chatData]);

  const txtDataSubmit = async () => {
    if (inputText.trim() === '') {
      return;
    }
    const key = Math.random().toString(36).substring(2, 15);
    socket.emit('submitMessage', JSON.stringify({ txt: inputText, key }));

    setInputText('');
  };

  return (
    <View className={`w-full h-screen justify-start items-center mt-30`}>
      <FlatList
        onScroll={() => {
          counting();
        }}
        className={`w-[100%] px-[20px]`}
        data={chatData}
        keyExtractor={(item, key) => key}
        renderItem={({ item }) => (
          <ChatBox
            isScrolled={isScrolled}
            item={item}
            navigation={navigation}
          />
        )}
      />
      <View
        className={
          'w-full h-fit py-10 flex-row justify-between items-center mb-90'
        }
      >
        <TextInput
          className={`w-full h-full bg-pink text-[black] dark:text-[white]`}
          onSubmitEditing={txtDataSubmit}
          placeholder="암거나 적으세용"
          value={inputText}
          onChangeText={setInputText}
        />
      </View>
    </View>
  );
};

export default ChatList;
