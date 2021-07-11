import React from 'react';
import { Text,  Icon, Footer, FooterTab, Button, View} from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector} from "react-redux";

export default function FooterC({navigation, act}) {

const nub = useSelector(state => state.Cart.items).length

    return (
        <Footer style={{height:69, borderTopColor:"#e7e7e7", borderTopWidth:3, }}>



  
{nub != 0 ? <Text style={{
  backgroundColor:'#49bdca', position:'absolute', zIndex:999, padding:5, borderRadius:80, 
  color:'#fff', width:30, height:30, textAlign:'center'
}}>{nub}</Text>  : null}




        <FooterTab style={{backgroundColor:"#fff", paddingTop:10, paddingBottom:10 }}>
          
          { act == 'home' ? 
              <Button vertical onPress={()=> {
                navigation.navigate('DashBoard');
              }}>
                <Icon name="home" style={css.icons} style={{color:"#49bdca"}} />
                <Text style={css.t1} style={{color:"#49bdca"}}>Home</Text>
              </Button>
            :
              <Button vertical onPress={()=> {
            navigation.navigate('DashBoard');
          }}>
            <Icon name="home" style={css.icons}  />
            <Text style={css.t1}>Home</Text>
          </Button>
            
          }


          
          
          


          { act == 'order' ? 

          <Button vertical onPress={()=> {
            navigation.navigate('Order');
          }}>
            <Icon active type="FontAwesome5" name="calendar" style={css.icons} style={{color:"#49bdca"}}/>
            <Text style={css.t1} style={{color:"#49bdca"}}>Orders</Text>
          </Button> : <Button vertical onPress={()=> {
            navigation.navigate('Order');
          }}>
            <Icon active type="FontAwesome5" name="calendar" style={css.icons}/>
            <Text style={css.t1}>Orders</Text>
          </Button>}

          { act == 'profile' ? 
          <Button vertical onPress={()=> {
            navigation.navigate('Profile');
          }}>
            <Icon name="person"  style={css.icons} style={{color:"#49bdca"}}/>
            <Text style={css.t1} style={{color:"#49bdca"}}>Profile</Text>
          </Button> :
          <Button vertical onPress={()=> {
            navigation.navigate('Profile');
          }}>
            <Icon name="person"  style={css.icons}/>
            <Text style={css.t1}>Profile</Text>
          </Button>}

          <View style={{backgroundColor:"#49bdca", margin:0, padding:0, marginTop:-10, }}>
          

          <Button vertical onPress={()=> {
            navigation.navigate('Cart');
          }}>
            <Icon name="cart" style={css.icons}  style={{color:"#fff"}}/>
            <Text  style={css.t1}  style={{color:"#fff", paddingBottom:10, textTransform:"none"}}>Checkout</Text>
          </Button>  

          </View>


        </FooterTab>
      </Footer>
    )
}


const css = StyleSheet.create({
  icons:{color:"#888"},
  t1:{color:"#777", textTransform:"capitalize", fontSize:16, fontWeight:"500", marginTop:6}
});