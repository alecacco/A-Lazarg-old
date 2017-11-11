import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
import SelectDepartmentScreen from './screens/SelectDepartmentScreen';

const MyApp = DrawerNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    SelectDepartment: {
      screen: SelectDepartmentScreen,
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