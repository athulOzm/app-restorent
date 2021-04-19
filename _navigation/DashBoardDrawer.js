import * as React from 'react';

import { createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';


import Profile from '../screens/Profile';
import DashBoard from '../screens/DashBoard';
import Upload from '../screens/Upload';

const Drawer = createDrawerNavigator();

export default DashBoardDrawer = () => {

  return(
    <Drawer.Navigator 
    
      drawerStyle={{
        backgroundColor: '#fff', headerTintColor: '#fff'
        
      }}
      
      drawerContent={props => <CustomDrawerContent {...props} />}
      >

      <Drawer.Screen name="DashBoard" component={DashBoard}  />
      <Drawer.Screen name="Profile" component={Profile} />
      {/* <Drawer.Screen name="Upload" component={Upload} /> */}
 
      
    </Drawer.Navigator>
  )
}