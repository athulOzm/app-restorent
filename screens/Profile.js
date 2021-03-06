import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Separator, Item, Input,  Button, 
    Card, Thumbnail, Container, CardItem, Body } from 'native-base';

import { useSelector } from "react-redux";

import d1 from '../assets/profile.jpg';

import FooterC from './Footer';
import bgImg from '../assets/border.png';
import DHeader from '../shared/Header';
import { connect } from 'react-redux';

import {userLogout} from '../actions'
 



 




const Profile = function(props, navigation) {

    const profile = useSelector(state => state.Auth.user);


    //console.log(profile);
 

    return (
        <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
            <StatusBar backgroundColor="#49bdca" barStyle="light-content" />

            <ScrollView style={{backgroundColor:"#fff"}}>

                {/* <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#49bdca", paddingTop:12}}>
                
                
                <Item style={{backgroundColor:"#fad099", borderColor:"#dd7c14", borderBottomWidth:1,  borderRadius:8, paddingLeft:10, paddingRight:10}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
          </Item>
                    
                </View> */}
            

          
    
    
              <ImageBackground 
                source={bgImg} 
                style={css.border}
                ></ImageBackground>


<View style={{
alignItems:'center', 
justifyContent:'center',
display:'flex',
flexDirection:'column'

}}>
<Text style={{
    fontSize:20, color:"#333", marginTop:30, height:40,  marginBottom:10, fontWeight:"bold"
}}>Member Profile</Text>


<Thumbnail style={css.cat} source={d1} />

<Text style={css.t3}> {profile.name}</Text>
<Text note>{profile.position}</Text>


<Text style={css.t2}>Service ID {profile.memberid}</Text>
<Text style={css.t2}>Phone {profile.phone}</Text>
<Text style={css.t2}>Rank : Fireman</Text>
<Text style={css.t2}>Member Type : Cash/ Credit</Text>

<Button 
                    style={css.button} 
                    rounded
                    >
                    <Text style={{textTransform:"capitalize"}}> View Statement</Text>
                  </Button>
 


</View>







 



 








 

            
            
                
  
            </ScrollView>


            <FooterC navigation={props.navigation} act="profile"/>
        </React.Fragment>
        
    )
}



export default Profile;

const css = StyleSheet.create({
    frame : {
        backgroundColor:"#fff",
        flex:1 ,
        resizeMode: 'cover'
      } ,
      banner:{
        backgroundColor:"#49bdca",
        width:"100%",
        height:100,
        justifyContent:"center",
        alignItems:"center",
      },
      border : {
        backgroundColor:"#fff",
        display:"flex", 
        
        width:"100%",
        height:53
      },
      cat: {
          width:90, height:90, borderRadius:90, marginLeft:8, marginRight:8
      },
      t2:{
        width:"100%", alignItems:"center", fontSize:17, textAlign:"center", fontWeight:'bold',
        color:"#444", marginTop:5
    },t3:{
        width:"100%", alignItems:"center", fontSize:19, textAlign:"center", fontWeight:'bold',
        color:"#444", marginTop:5
    },
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      },button:{
        marginTop:35, justifyContent:"center",width:"90%", color:"#49bdca", 
        backgroundColor:"#49bdca", borderRadius:8, textTransform:"none",  margin:"auto", marginLeft:"5%"
    }

});