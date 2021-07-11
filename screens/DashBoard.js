import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Separator, Item, Input,  Button, 
    Card, Thumbnail, Container, CardItem, Body } from 'native-base';

import { useSelector, useDispatch } from "react-redux";


import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';

import FooterC from './Footer';
import bgImg from '../assets/border.png';
import DHeader from '../shared/Header';
import {imgpath} from '../_shared'

import {userLogout} from '../actions'
 



 




const DashBoard = function(props, navigation) {

  const dispatch = useDispatch();

 

  const categories = useSelector(state => state.Category.items);
  const products = useSelector(state => state.Product.items);
  const cartitems = useSelector(state => state.Cart.items)


  
 

    return (
        <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
            <StatusBar backgroundColor="#49bdca" barStyle="light-content" />


            <ScrollView style={{backgroundColor:"#fff"}}>

                <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#49bdca", paddingTop:12}}>

                
                <Item style={{backgroundColor:"#b6f4fb", borderColor:"#dd7c14", borderBottomWidth:1,  borderRadius:8, paddingLeft:10, paddingRight:10}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            {/* <Icon name="ios-people" /> */}
          </Item>
                    
                </View>
            

          
    
    
              <ImageBackground 
                source={bgImg} 
                style={css.border}
                ></ImageBackground>

<Text style={{
    fontSize:17, color:"#333", marginTop:30, height:40,  marginBottom:10, fontWeight:"bold", marginLeft:25
}}>All Categories</Text>

<Container style={css.box}>


{
  categories.map((category) => {

   return  <View key={category.id} style={{margin:10}}>

     {
       category.cover != null ?
       <Thumbnail style={css.cat} source={{uri: `${imgpath}/${category.cover}`}} /> :
       <Thumbnail style={css.cat} source={d2} />

     }


            

            <Text style={css.t2}>{category.name}</Text>
          </View>

  })
}



</Container>



<Container style={{backgroundColor:"#fff", padding:10}}>


  {

    products.map((product) => {

      var pcart = cartitems.filter(function (el)
        {
          return el.id == product.id ;
        }
      );

    
       

      

      return <Card key={product.id}>
              <CardItem>
                <Left>
                {
       product.cover != null ?
       <Thumbnail style={css.cat2} source={{uri: `${imgpath}/${product.cover}`}} /> :
     
       <Thumbnail style={css.cat2} source={d2} />


     }

                  <Body>
                    <Text>{product.name}</Text>
                    <Text note>Snacks</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{backgroundColor:"#e7e7e7",}}>
                <Left style={{padding:2}}>
                  <Button transparent>
                    <Text style={{color:"#333", fontSize:17, fontWeight:"bold"}}>OMR {product.price}</Text>
                  </Button>
                </Left>
                <Right>

               


                  { 
                  pcart[0] ? 
                    <View style={{display:"flex", flexDirection:"row"}}>
                      <Button  transparent
                      onPress={()=> {

                        pcart[0].qty == 1 ? 

                        dispatch({
                          type: "CART_REM", payload:product.id
                        }) : 

                        dispatch({
                          type: "CART_ADD2", payload:{'id':product.id, 'name':product.name, 'qty':pcart[0].qty - 1, 'cover':product.cover, 'price':product.price}
                        })
                      }}>

                         
                        <Icon 
                          style={{color:"#333", fontSize:20, color:"#49bdca", fontWeight:"100"}} active 
                          type="FontAwesome5" 
                          name="minus"/>
                      </Button>
                      <Text style={{marginLeft:15, marginRight:15, backgroundColor:"#fff", color:"#333", padding:10}}>{pcart[0].qty}</Text>
                      <Button  transparent
                      onPress={()=> {
                        dispatch({
                          type: "CART_ADD2", payload:{'id':product.id, 'name':product.name, 'qty':pcart[0].qty + 1, 'cover':product.cover, 'price':product.price}
                        })
                      }}>
                        <Icon 
                          style={{color:"#333", fontSize:20, color:"#49bdca", fontWeight:"100"}} active 
                          type="FontAwesome5" 
                          name="plus"/>
                      </Button>
                    </View> :

                    <Button  transparent
                    onPress={()=> {
                      dispatch({
                        type: "CART_ADD", payload:{'id':product.id, 'name':product.name, 'qty':1, 'cover':product.cover, 'price':product.price}
                      })
                    }}>
                      <Icon 
                        style={{color:"#333", fontSize:20, color:"#49bdca", fontWeight:"100"}} active 
                        type="FontAwesome5" 
                        name="plus"/>
                    </Button>

                  }


                  


                </Right>
              </CardItem>
            </Card>
    })
  }

          



          





          </Container>





 

            
            
                
  
            </ScrollView>


            <FooterC navigation={props.navigation} act="home"/>
        </React.Fragment>
        
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout : () => dispatch(userLogout())
//     }
// }





//export default connect(null, mapDispatchToProps)(DashBoard);

export default DashBoard;

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
        width:60, height:60, borderRadius:60, marginLeft:8, marginRight:8
    },
    cat2: {
      width:90, height:90, borderRadius:6, marginLeft:0, marginRight:8, marginBottom:0
  },
  t2:{
    width:"100%", alignItems:"center", fontSize:17, textAlign:"center", fontWeight:'bold',
    color:"#444", marginTop:5
},t3:{
  width:"100%", alignItems:"center", fontSize:19, textAlign:"center", fontWeight:'bold',
  color:"#444", marginTop:0
},
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      }

});