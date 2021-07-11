import React from 'react';
import { Text, View, Spinner} from 'native-base';
import {StyleSheet, StatusBar, Image} from 'react-native'
import logo from '../assets/logo.png';


export default function LoadingScreen() {
    return (
        <React.Fragment>
        <StatusBar backgroundColor="#49bdca" barStyle="light-content" />
            <View style={css.container}>

            <Image source={logo} style={{
    width: 110, height: 110, marginBottom:0, marginBottom:50,
    resizeMode: 'stretch'
  }} /> 
  <Text style={{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold",
    marginTop:-45
  }}>Al husn Club</Text>
               
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
        backgroundColor:"#49bdca"
    }
});

 