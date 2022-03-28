import React from 'react'
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import LogOutStack from './LogOutStack';


const SignUpSearch = createNativeStackNavigator();

const SearchsStackScreen =() => {
  return (
    <SearchsStackScreen.Navigator
    screenOptions={{
      headerTitle: '',
    }}
    >
    <SearchsStack.Screen
    name="stackpage"
    componet={LogOutStack}
    options={{
    
    }}
    />
    </SearchsStackScreen.Navigator>
  )
}


export default SignUpStack