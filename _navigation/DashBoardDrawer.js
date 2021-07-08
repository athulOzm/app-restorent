import * as React from 'react';

import { createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';


import Profile from '../screens/Profile';
import DashBoard from '../screens/DashBoard';
import Upload from '../screens/Upload';
import Cart from '../screens/Cart';
import Order from '../screens/Order';
import Menutype from '../screens/Menutype';

const Drawer = createDrawerNavigator();

export default DashBoardDrawer = () => {

  return(
    <Drawer.Navigator 
    
      drawerStyle={{
        backgroundColor: '#fff', headerTintColor: '#fff'
        
      }}
      
      drawerContent={props => <CustomDrawerContent {...props} />}
      >

      <Drawer.Screen name="Menutype" component={Menutype}  />
      <Drawer.Screen name="DashBoard" component={DashBoard}  />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Order" component={Order} />
      {/* <Drawer.Screen name="Upload" component={Upload} /> */}
 
      
    </Drawer.Navigator>
  )
}