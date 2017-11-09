import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';

const MyApp = DrawerNavigator(
  {
    Start: {
      screen: StartScreen,
    }
  },
  {
      initialRouteName: 'Start',
      drawerPosition: 'left',
      width : 300
      //contentComponent: SideMenu
  }
);

export default MyApp;

//WARNING: lock rotation