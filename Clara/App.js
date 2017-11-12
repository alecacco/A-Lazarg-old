import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
import SelectDepartmentScreen from './screens/SelectDepartmentScreen';
import FreeRoomsScreen from './screens/FreeRoomsScreen';
import PrincipalHeaderComponent from './components/PrincipalHeader';

const MyApp = DrawerNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    SelectDepartment: {
      screen: SelectDepartmentScreen,
    },
    FreeRooms: {
      screen: FreeRoomsScreen,
    },
    PrincipalHeader: {
      screen: PrincipalHeaderComponent,
    },
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