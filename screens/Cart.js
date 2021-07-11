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
import { checkout } from '../actions';
 


const Cart = function(props, navigation) {

    const dispatch = useDispatch();

 

        const cartitems = useSelector(state => state.Cart.items)
        const cart = useSelector(state => state.Cart)
        const menutype = useSelector(state => state.Cart.menutype)
        var edt = useSelector(state => state.Cart.time)

        console.log(edt);

        switch (menutype) {
          case 2:
            var mt = 'Breakfast';
            break;

          case 3:
            var mt = 'Lunch';
            break;
        
          default:
            var mt = 'Dinner';
            break;
        }
 
        var sum = 0;

        return (
            <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
    
            <StatusBar backgroundColor="#49bdca" barStyle="light-content" />


            <ScrollView style={{backgroundColor:"#fff"}}>

                <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#49bdca", paddingTop:12, display:"flex", alignItems:"center"}}>
                
                
                 <Text style={{color:"#fff", fontSize:16, fontWeight:"bold", marginBottom:2}}>ORDER ITEMS</Text>
 
                </View>

                <ImageBackground 
                source={bgImg} 
                style={css.border}
                ></ImageBackground>
 




 { cart.msg == null ?

                
            

          <Content>

              {
               

                  cartitems.map((product) => {

                    var tp = parseFloat(product.price * product.qty).toFixed(3);
                    sum += Number(tp);


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
                <Text note numberOfLines={1}>RO : {product.price} x {product.qty}</Text>
              </Body>
              <Right>
                
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
                          style={{color:"#333", fontSize:17, color:"#49bdca", fontWeight:"100"}} active 
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
                          style={{color:"#333", fontSize:17, color:"#49bdca", fontWeight:"100"}} active 
                          type="FontAwesome5" 
                          name="plus"/>
                      </Button>
                    </View>
             
              </Right>
            </ListItem>
          </List>


})
}



<View style={{ paddingTop:12, display:"flex", alignItems:"center"}}>
                
                
                 <Text style={{color:"#555", fontSize:16, fontWeight:"bold", marginBottom:10, marginTop:10}}>ORDER DETAILS</Text>

                 <Text style={{color:"#333", fontSize:14, fontWeight:"600"}}>Menu Type </Text>
                 <Text style={css.b1}>{mt}</Text>

                 <Text style={{color:"#333", fontSize:14, fontWeight:"600", marginTop:10}}>Expected Delivery Time</Text>
                 <Text style={css.b1}>{edt.toUTCString()}</Text>

                 <Text style={{color:"#333", fontSize:14, fontWeight:"600", marginTop:10}}>Total Amount</Text>
                 <Text style={css.b1}>{sum.toFixed(3)}</Text>

                </View>
            

                <Button 
                  onPress={()=> {
                    dispatch(checkout(cart))
                  }}
                    style={css.button} 
                    rounded
                     >
                    <Text style={{textTransform:"capitalize"}} >Place Order</Text>
                  </Button>

          </Content> 


: <View style={{display:"flex", marginTop:150, alignItems:"center", justifyContent:"center"}}><Text style={{color:"#49bdca", fontSize:19, fontWeight:"bold", marginBottom:10, marginTop:10}}>{cart.msg}</Text>

<Text style={{color:"#777", fontSize:14, marginBottom:10, marginTop:10}}>Cancel Order </Text>

</View>}
    
          
            
                
  
            </ScrollView>


            <FooterC navigation={props.navigation} act="cart"/>
        </React.Fragment>
        )
     
}

 





export default  Cart;



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
      b1 : {
        fontWeight:"bold",
        color:"#49bdca", fontSize:16
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
        
        
      }, button:{
        marginTop:15, justifyContent:"center",width:"90%", color:"#49bdca", 
        backgroundColor:"#49bdca", borderRadius:8, textTransform:"none",  margin:"auto", marginLeft:"5%", marginBottom:60
    },

});
