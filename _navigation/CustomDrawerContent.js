import * as React from 'react';
import { 
  DrawerContentScrollView,
  DrawerItemList, 
  DrawerItem
 } from '@react-navigation/drawer';

import LogoutBtn from '../shared/LogoutBtn';

 


const CustomDrawerContent = (props) => {

 // console.log(props);
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

     

      
        <LogoutBtn />

        
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawerContent




