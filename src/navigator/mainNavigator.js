import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen113048Navigator from '../features/CopyOfBlankScreen113048/navigator';
import BlankScreen113046Navigator from '../features/BlankScreen113046/navigator';
import BlankScreen013040Navigator from '../features/BlankScreen013040/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen113048: { screen: CopyOfBlankScreen113048Navigator },
BlankScreen113046: { screen: BlankScreen113046Navigator },
BlankScreen013040: { screen: BlankScreen013040Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
