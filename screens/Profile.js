import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Separator, Item, Input,  Button, 
    Card, Thumbnail, Container, CardItem, Body } from 'native-base';


import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';

import FooterC from './Footer';
import bgImg from '../assets/border.png';
import DHeader from '../shared/Header';
import { connect } from 'react-redux';

import {userLogout} from '../actions'
 



 




const Profile = function(props, navigation) {

    const profile = props.profile;
    console.log(profile);
 

    return (
        <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
            <StatusBar backgroundColor="#f98b2a" barStyle="light-content" />

            <ScrollView style={{backgroundColor:"#fff"}}>

                <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#f98b2a", paddingTop:12}}>
                
                
                <Item style={{backgroundColor:"#fad099", borderColor:"#dd7c14", borderBottomWidth:1,  borderRadius:8, paddingLeft:10, paddingRight:10}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            {/* <Icon name="ios-people" /> */}
          </Item>
                    
                </View>
            

          
    
    
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


<Thumbnail style={css.cat} source={d2} />

<Text style={css.t2}> ss</Text>
<Text note>Breackfast, Omani Food</Text>


</View>







 



 








 

            
            
                
  
            </ScrollView>


            <FooterC navigation={props.navigation} />
        </React.Fragment>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch(userLogout())
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const css = StyleSheet.create({
    frame : {
        backgroundColor:"#fff",
        flex:1 ,
        resizeMode: 'cover'
      } ,
      banner:{
        backgroundColor:"#f98b2a",
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
      },
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      }

});