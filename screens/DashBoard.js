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


        const per     =  [{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image":""},{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66","profile_image":""},{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22","profile_image":""},{"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33","profile_image":""},{"id":"6","employee_name":"Brielle Williamson","employee_salary":"372000","employee_age":"61","profile_image":""},{"id":"7","employee_name":"Herrod Chandler","employee_salary":"137500","employee_age":"59","profile_image":""},{"id":"8","employee_name":"Rhona Davidson","employee_salary":"327900","employee_age":"55","profile_image":""},{"id":"9","employee_name":"Colleen Hurst","employee_salary":"205500","employee_age":"39","profile_image":""},{"id":"10","employee_name":"Sonya Frost","employee_salary":"103600","employee_age":"23","profile_image":""},{"id":"11","employee_name":"Jena Gaines","employee_salary":"90560","employee_age":"30","profile_image":""},{"id":"12","employee_name":"Quinn Flynn","employee_salary":"342000","employee_age":"22","profile_image":""},{"id":"13","employee_name":"Charde Marshall","employee_salary":"470600","employee_age":"36","profile_image":""},{"id":"14","employee_name":"Haley Kennedy","employee_salary":"313500","employee_age":"43","profile_image":""},{"id":"15","employee_name":"Tatyana Fitzpatrick","employee_salary":"385750","employee_age":"19","profile_image":""},{"id":"16","employee_name":"Michael Silva","employee_salary":"198500","employee_age":"66","profile_image":""},{"id":"17","employee_name":"Paul Byrd","employee_salary":"725000","employee_age":"64","profile_image":""},{"id":"18","employee_name":"Gloria Little","employee_salary":"237500","employee_age":"59","profile_image":""},{"id":"19","employee_name":"Bradley Greer","employee_salary":"132000","employee_age":"41","profile_image":""},{"id":"20","employee_name":"Dai Rios","employee_salary":"217500","employee_age":"35","profile_image":""},{"id":"21","employee_name":"Jenette Caldwell","employee_salary":"345000","employee_age":"30","profile_image":""},{"id":"22","employee_name":"Yuri Berry","employee_salary":"675000","employee_age":"40","profile_image":""},{"id":"23","employee_name":"Caesar Vance","employee_salary":"106450","employee_age":"21","profile_image":""},

    {"id":"24","employee_name":"Doris Wilder","employee_salary":"85600","employee_age":"23","profile_image":""}
];
    
 

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

      return <Card key={product.id}>
              <CardItem>
                <Left>
                <Thumbnail style={css.cat} source={d2} />
                  <Body>
                    <Text>{product.name}</Text>
                    <Text note>Snacks</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                   
                    <Text style={{color:"#333", fontSize:17, fontWeight:"bold"}}>OMR {product.price}</Text>
                  </Button>
                </Left>
                <Right>


                  {

                    cartitems.includes(product.id) ? <Button  transparent
                    onPress={()=> {
                      dispatch({
                        type: "CART_REM", payload:product.id
                      })
                    }}>
                      <Icon 
                        style={{color:"#333", fontSize:27, color:"#e9750f", fontWeight:"100"}} active 
                        type="FontAwesome5" 
                        name="minus"/>
                    </Button> : <Button  transparent
                    onPress={()=> {
                      dispatch({
                        type: "CART_ADD", payload:product.id
                      })
                    }}>
                      <Icon 
                        style={{color:"#333", fontSize:27, color:"#e9750f", fontWeight:"100"}} active 
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
          width:60, height:60, borderRadius:60, marginLeft:8, marginRight:8
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