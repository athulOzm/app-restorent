import * as React from 'react';


import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {userLogout} from '../actions'


import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';



const LogoutBtn = (props) =>{

    
    return (
      
        <TouchableOpacity onPress={() => {
          props.logout()
        }}>
          <Text style={css.btn}>logout</Text>
        </TouchableOpacity>
      
    )
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch(userLogout())
    }
}

export default connect(null, mapDispatchToProps)(LogoutBtn);

const css = StyleSheet.create({
    btn : {
        paddingLeft:18,
        paddingTop:15,
        fontSize:14,
        color:'#555'
    }
})

