import React from 'react';
import { Text,  Icon, Footer, FooterTab, Button} from 'native-base';
import { StyleSheet } from 'react-native';

export default function FooterC({navigation}) {
    return (
        <Footer style={{height:69, borderTopColor:"#e7e7e7", borderTopWidth:3, }}>
        <FooterTab style={{backgroundColor:"#fff", paddingTop:10, paddingBottom:10 }}>
          <Button vertical onPress={()=> {
            navigation.navigate('DashBoard');
          }}>
            <Icon name="home" style={css.icons} style={{color:"#e9750f"}} />
            <Text style={css.t1} style={{color:"#e9750f"}}>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="cart" style={css.icons} />
            <Text  style={css.t1}>Orders</Text>
          </Button>
          {/* <Button vertical active> */}
          <Button vertical>
            <Icon active name="navigate" style={css.icons}/>
            <Text style={css.t1}>Favorite</Text>
          </Button>
          <Button vertical onPress={()=> {
            navigation.navigate('Profile');
          }}>
            <Icon name="person"  style={css.icons}/>
            <Text style={css.t1}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
}


const css = StyleSheet.create({
  icons:{color:"#888"},
  t1:{color:"#777", textTransform:"capitalize", fontSize:16, fontWeight:"500", marginTop:6}
});