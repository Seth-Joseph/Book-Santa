import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import {AppTabNavigator} from './component/AppTabNavigator';
import {AppDrawerNavigator} from './component/AppDrawerNavigator';


export default class App extends Component {
  render(){
  return (
    <appContainer/>
  );
}}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const appContainer = createAppContainer(switchNavigator)
