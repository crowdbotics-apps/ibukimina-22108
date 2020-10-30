import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList21164915Navigator from '../features/NotificationList21164915/navigator';
import Settings22164914Navigator from '../features/Settings22164914/navigator';
import UserProfile24164912Navigator from '../features/UserProfile24164912/navigator';
import Settings164896Navigator from '../features/Settings164896/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList21164915: { screen: NotificationList21164915Navigator },
Settings22164914: { screen: Settings22164914Navigator },
UserProfile24164912: { screen: UserProfile24164912Navigator },
Settings164896: { screen: Settings164896Navigator },

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
