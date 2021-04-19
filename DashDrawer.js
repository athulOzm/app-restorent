import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import DashBoard from './screens/DashBoard';
import Profile from './screens/Profile';
import Profiles from './screens/Profiles';

const screens = {
 
    // Home : {
    //     screen: DashBoard,
    // },
 
    // Profiles : {
    //     screen: Profiles,
    // } 

}

 
const DashDrawer = createDrawerNavigator(screens);

export default createAppContainer(DashDrawer);