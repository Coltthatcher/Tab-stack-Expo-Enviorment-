import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Credit from "./Credit";
import Home from "./Home";
import LogOut from "./LogOut";
import SignUp from "./SignUp";
import HomeStackScreen from "./Stacks/HomeStack";
// import MarketOverview from "./../marketOverview";
// import SearchsStackScreen from './searchStackNav'


const Tab = createMaterialTopTabNavigator();

const Nav = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen
      name='home'
      component={HomeStackScreen}
      options={{
        title: 'Home'
      }}
      />
      <Tab.Screen
      name='credit'
      component={Credit}
      options={{
        title: 'Credit'
      }}
      />
            <Tab.Screen
      name='logout'
      component={LogOut}
      options={{
        title: 'logout'
      }}
      />
            <Tab.Screen
      name='SignUp'
      component={SignUp}
      options={{
        title: 'SignUp'
      }}
      />
    </Tab.Navigator>
  )
}

export default Nav;