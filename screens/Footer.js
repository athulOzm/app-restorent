import React from 'react';
import { Text,  Icon, Footer, FooterTab, Button} from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector} from "react-redux";

export default function FooterC({navigation, act}) {

const nub = useSelector(state => state.Cart.items).length

    return (
        <Footer style={{height:69, borderTopColor:"#e7e7e7", borderTopWidth:3, }}>



  
{nub != 0 ? <Text style={{
  backgroundColor:'#e9750f', position:'absolute', zIndex:999, padding:5, borderRadius:80, 
  color:'#fff', width:30, height:30, textAlign:'center'
}}>{nub}</Text>  : null}




        <FooterTab style={{backgroundColor:"#fff", paddingTop:10, paddingBottom:10 }}>
          
          { act == 'home' ? 
              <Button vertical onPress={()=> {
                navigation.navigate('DashBoard');
              }}>
                <Icon name="home" style={css.icons} style={{color:"#e9750f"}} />
                <Text style={css.t1} style={{color:"#e9750f"}}>Home</Text>
              </Button>
            :
              <Button vertical onPress={()=> {
            navigation.navigate('DashBoard');
          }}>
            <Icon name="home" style={css.icons}  />
            <Text style={css.t1}>Home</Text>
          </Button>
            
          }


          
          
          { act == 'cart' ? 

          <Button vertical>
            <Icon name="cart" style={css.icons}  style={{color:"#e9750f"}}/>
            <Text  style={css.t1}  style={{color:"#e9750f"}}>Cart</Text>
          </Button> : <Button vertical>
            <Icon name="cart" style={css.icons} />
            <Text  style={css.t1} >Cart </Text>
          </Button> }


          {/* <Button vertical active> */}
          <Button vertical>
            <Icon active type="FontAwesome5" name="calendar" style={css.icons}/>
            <Text style={css.t1}>Orders</Text>
          </Button>

          { act == 'profile' ? 
          <Button vertical onPress={()=> {
            navigation.navigate('Profile');
          }}>
            <Icon name="person"  style={css.icons} style={{color:"#e9750f"}}/>
            <Text style={css.t1} style={{color:"#e9750f"}}>Profile</Text>
          </Button> :
          <Button vertical onPress={()=> {
            navigation.navigate('Profile');
          }}>
            <Icon name="person"  style={css.icons}/>
            <Text style={css.t1}>Profile</Text>
          </Button>}


        </FooterTab>
      </Footer>
    )
}


const css = StyleSheet.create({
  icons:{color:"#888"},
  t1:{color:"#777", textTransform:"capitalize", fontSize:16, fontWeight:"500", marginTop:6}
});