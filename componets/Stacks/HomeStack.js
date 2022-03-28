import React from 'react'
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import Home from '../Home';
import One from '../home/One';
import Two from '../home/Two';
import Three from '../home/Three';


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator 
      screenOptions={{
        headerTitle: 'This is the HomeStack Test',
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <HomeStack.Screen 
        name="One" 
        component={One}
        options={{
          // headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="Two" 
        component={Two}
        options={{
          // headerShown: false,
        }}
      />

      <HomeStack.Screen 
        name="Three" 
        component={Three}
        options={{
          // headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;