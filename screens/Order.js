import React from 'react'


import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Separator, Item, Input,  Button, 
    Card, Thumbnail, Container, CardItem, Body, Content } from 'native-base';

import { useSelector, useDispatch } from "react-redux";

import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';

import {imgpath} from '../_shared'
import DHeader from '../shared/Header';
import FooterC from './Footer';
import bgImg from '../assets/border.png';


const Order = function(props, navigation) {

    const dispatch = useDispatch();

 

        const cartitems = useSelector(state => state.Cart.items)
 


        return (
            <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
            <StatusBar backgroundColor="#49bdca" barStyle="light-content" />


            <ScrollView style={{backgroundColor:"#fff"}}>

                <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#49bdca", paddingTop:12}}>
                
                
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
 




 <View style={{display:"flex", alignItems:"center", justifyContent:"center"}}>

 <Text style={{
    fontSize:16, color:"#333", marginTop:40, height:40,  marginBottom:0, fontWeight:"bold"
}}>Order Items</Text>


          
        </View>

                
            

          <Content>

              {
                  cartitems.map((product) => {

                    console.log(product);


          return <List key={product.id}>
            <ListItem thumbnail>
              <Left>
             { product.cover != null ?
       <Thumbnail square source={{uri: `${imgpath}/${product.cover}`}} /> :
     
       <Thumbnail square source={d2} />


     }
 
              </Left>
              <Body>
                <Text>{product.name}</Text>
                <Text note numberOfLines={1}>RO : {product.price}</Text>
              </Body>
              <Right>
                <Button transparent>
                <View style={{display:"flex", flexDirection:"row"}}>
                      <Button  transparent
                      onPress={()=> {

                        product.qty == 1 ? 

                        dispatch({
                          type: "CART_REM", payload:product.id
                        }) : 

                        dispatch({
                          type: "CART_ADD2", payload:{'id':product.id, 'name':product.name, 'qty':product.qty - 1, 'cover':product.cover, 'price':product.price}
                        })
                      }}>

                         
                        <Icon 
                          style={{color:"#333", fontSize:20, color:"#49bdca", fontWeight:"100"}} active 
                          type="FontAwesome5" 
                          name="minus"/>
                      </Button>
                      <Text style={{marginLeft:15, marginRight:15, backgroundColor:"#fff", color:"#333", padding:10}}>{product.qty}</Text>
                      <Button  transparent
                      onPress={()=> {
                        dispatch({
                          type: "CART_ADD2", payload:{'id':product.id, 'name':product.name, 'qty':product.qty + 1, 'cover':product.cover, 'price':product.price}
                        })
                      }}>
                        <Icon 
                          style={{color:"#333", fontSize:20, color:"#49bdca", fontWeight:"100"}} active 
                          type="FontAwesome5" 
                          name="plus"/>
                      </Button>
                    </View>
                </Button>
              </Right>
            </ListItem>
          </List>


})
}





          </Content>
    
 
            
            
                
  
            </ScrollView>


            <FooterC navigation={props.navigation} act="order"/>
        </React.Fragment>
        )
     
}

 





export default  Order;



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
        
        
      }

});
