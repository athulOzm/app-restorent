import React, { Component } from 'react'


import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, 
    Card, Thumbnail, Container, CardItem, Body, Button, Icon, Title, Segment, Item, Input } from 'native-base';

    import { connect } from 'react-redux';
import DHeader from '../shared/Header';
import FooterC from './Footer';
import bgImg from '../assets/border.png';
import { Header } from 'react-native/Libraries/NewAppScreen';
 



class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
    

    
    
    render() {

        const carts = this.props.cart;
        const products = this.props.products;

        const active = products.map((product) => {

            return carts.includes(product.id) ? product : ''
        })

        //console.log(this.props.cart);
        return (
            <React.Fragment>



            <DHeader navigation={this.props.navigation} title="" />
            <StatusBar backgroundColor="#f98b2a" barStyle="light-content" />

            <ScrollView style={{backgroundColor:"#fff"}}>

                <View style={{paddingLeft:14,
                    paddingRight:16, backgroundColor:"#f98b2a", paddingTop:12}}>
                
                
                <Text style={css.t3}> CART CHECKOUT</Text>
                    
                </View>

                <ImageBackground 
                source={bgImg} 
                style={css.border}
                ></ImageBackground>



            
<Container style={{
    padding:15
}}>



 
          <Card>

{
    carts.map((item) => {

        //console.log(item);

       return  <CardItem key={item}>
              <Body>
                <Text>
                   
                   Product Name here <Text style={{
                       right:10, backgroundColor:"#333", color:"#fff", width:30
                   }}>1</Text>
                </Text>
              </Body>
            </CardItem>

    })
}
            

<Item>
              <Input placeholder="Expected Time" />
              
            </Item>

          </Card>
     


     




<Button block warning>
            <Text>Checkout</Text>
          </Button>

</Container>
          
    
 
         
            
                
  
            </ScrollView>


            <FooterC navigation={this.props.navigation} act="cart"/>
        </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //logout : () => dispatch(userLogout())
    }
}

const mapStateToProps = (state) => {

    return {
        cart : state.Cart.items,
        products : state.Product.items
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Cart);



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
        color:"#fff", marginTop:5
    },
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      }

});
