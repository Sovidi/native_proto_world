/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-reanimated';
import '@/global.css';

import Home from '@/src/screens/home';
import Dogs from '@/src/screens/dogs';
import Cgn from '@/src/screens/cgn';
import Onflou from '@/src/screens/onflou';
import SurpriseBox from '@/src/components/surpriseBox';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // 아이콘 설정
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Dogs') {
              iconName = focused ? 'beer' : 'beer-outline';
            } else if (route.name === 'Cgn') {
              iconName = focused ? 'flash' : 'flash-outline';
            } else if (route.name === 'Onflou') {
              iconName = focused ? 'megaphone' : 'megaphone-outline';
            } else if (route.name === 'Surprise') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            }

            // Ionicons 아이콘 렌더링
            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // 상단 타이틀바 숨기기 (선택사항)
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dogs" component={Dogs} />
        <Tab.Screen name="Cgn" component={Cgn} />
        <Tab.Screen name="Onflou" component={Onflou} />
        <Tab.Screen name="Surprise" component={SurpriseBox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
