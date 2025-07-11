import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  Easing,
} from 'react-native-reanimated';

const ChatBox = ({ isScrolled, item }) => {
  const { targetRef, isViewed, intersecting } = useIntersectionObserver();

  const opacity = useSharedValue(0);
  const translateX = useSharedValue(-100);

  useEffect(() => {
    const config = {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    };

    if (isViewed) {
      opacity.value = withTiming(1, config);
      translateX.value = withTiming(0, config);
    } else {
      opacity.value = withTiming(0, config);
      translateX.value = withTiming(-100, config);
    }
  }, [isViewed]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  useEffect(() => {
    intersecting();
  }, [isScrolled]);

  return (
    <Animated.View ref={targetRef} style={[animatedStyle]}>
      <Pressable
        onPress={() => {
          // navigation.navigate('Detail');
        }}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : '#ccc',
          padding: 10,
          borderRadius: 8,
        })}
      >
        <View
          className={`${isViewed ? 'bg-[pink]' : 'bg-[black]'} w-full mb-[10px] h-[30px] justify-center items-center rounded-[10px]`}
        >
          <Text className={`dark:text-[red] text-[blue]`}>{item?.txt}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default ChatBox;
