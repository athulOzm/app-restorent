import React, { Component } from 'react'


import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Separator, Item, Input,  Button, 
    Card, Thumbnail, Container, CardItem, Body } from 'native-base';

    import { connect } from 'react-redux';
import DHeader from '../shared/Header';
import FooterC from './Footer';
import bgImg from '../assets/border.png';


class Order extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>



            <DHeader navigation={this.props.navigation} title="" />
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






                
            

          
    
 
            
            
                
  
            </ScrollView>


            <FooterC navigation={this.props.navigation} act="order"/>
        </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch(userLogout())
    }
}

const mapStateToProps = (state) => {

    return {
        cart : state.Cart.items
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Order);



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
    },t3:{
        width:"100%", alignItems:"center", fontSize:19, textAlign:"center", fontWeight:'bold',
        color:"#444", marginTop:5
    },
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      }

});
