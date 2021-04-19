import React from 'react';
import { Text, View, Spinner} from 'native-base';
import {StyleSheet, StatusBar, Image} from 'react-native'
import logo from '../assets/logo.png';


export default function LoadingScreen() {
    return (
        <React.Fragment>
        <StatusBar backgroundColor="#f98b2a" barStyle="light-content" />
            <View style={css.container}>

            <Image source={logo} style={{
    width: 50, height: 50, marginBottom:0, marginBottom:50,
    resizeMode: 'stretch'
  }} /> 
  <Text style={{
    fontSize:20,
    color:"#333",
    fontWeight:"bold",
    marginTop:-45
  }}>restoapp</Text>
               
                <Spinner color='#fff' />
                
            
            </View>
        </React.Fragment>
    )
}



 

const css = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"#f98b2a"
    }
});

 