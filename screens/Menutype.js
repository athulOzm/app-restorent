import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

import {View, StyleSheet, FlatList, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import {List, ListItem, Text, Left, Right, Icon, Button} from 'native-base';

import { useSelector, useDispatch } from "react-redux";

 
import FooterC from './Footer';
import bgImg from '../assets/border.png';
import DHeader from '../shared/Header';
import { connect } from 'react-redux';

import {userLogout} from '../actions'
 

 




const Menutype = function(props, navigation) {



 

    const dispatch = useDispatch();


    const menutype = useSelector(state => state.Cart.menutype);
    const time = useSelector(state => state.Cart.time);
    const ittt = useSelector(state => state.Cart);
 
console.log(ittt);

    return (
        <React.Fragment>



            <DHeader navigation={props.navigation} title="" />
            <StatusBar backgroundColor="#49bdca" barStyle="light-content" />

            <ScrollView style={{backgroundColor:"#fff"}}>

            
            

          
    
    
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


{/* <Text style={{
    fontSize:20, color:"#333", marginTop:10, height:40,  marginBottom:0, fontWeight:"bold"
}}>Date</Text>

<DatePicker
      date={date}
      onDateChange={setDate}
      mode="date"
      androidVariant="nativeAndroid"

    /> */}


<Text style={{
    fontSize:20, color:"#333", marginTop:30, height:40,  marginBottom:10, fontWeight:"bold"
}}>Choose Menu Type</Text>


 


<View style={css.catf}>

{
menutype == 2 ?
  <TouchableOpacity style={css.catact}>
  <Icon active type="FontAwesome5" name="coffee" style={css.icons} style={{color:"#fff", fontSize:53}}/>
    <Text style={{color:"#fff"}}>Breakfast</Text>
  </TouchableOpacity>
  :
  <TouchableOpacity style={css.cat} 
    onPress={()=> {
      dispatch({
        type: "CART_TYPE", payload:2
      })
    }}>

  <Icon active type="FontAwesome5" name="coffee" style={css.icons} style={{color:"#49bdca", fontSize:53}}/>
    <Text>Breakfast</Text>
  </TouchableOpacity>
}

{
menutype == 3 ?
  <TouchableOpacity style={css.catact}>
  <Icon active type="FontAwesome5" name="utensils" style={css.icons} style={{color:"#fff", fontSize:53}}/>
    <Text style={{color:"#fff"}}>Lunch</Text>
  </TouchableOpacity>
  :
  <TouchableOpacity style={css.cat} 
    onPress={()=> {
      dispatch({
        type: "CART_TYPE", payload:3
      })
    }}>

  <Icon active type="FontAwesome5" name="utensils" style={css.icons} style={{color:"#49bdca", fontSize:53}}/>
    <Text>Lunch</Text>
  </TouchableOpacity>
}


{
menutype == 4 ?
  <TouchableOpacity style={css.catact} >
  <Icon active type="FontAwesome5" name="moon" style={css.icons} style={{color:"#fff", fontSize:53}}/>
    <Text style={{color:"#fff"}}>Dinner</Text>
  </TouchableOpacity>
  :
  <TouchableOpacity style={css.cat} 
    onPress={()=> {
      dispatch({
        type: "CART_TYPE", payload:4
      })
    }}>

  <Icon active type="FontAwesome5" name="moon" style={css.icons} style={{color:"#49bdca", fontSize:53}}/>
    <Text>Dinner</Text>
  </TouchableOpacity>
}
  

 

</View>

<Text style={{
    fontSize:20, color:"#333", marginTop:40, height:40,  marginBottom:0, fontWeight:"bold"
}}>Expected Delivery Time</Text>


<DatePicker
      date={time}
      //onDateChange={setDate}
      onDateChange={(date) => {
        dispatch({type: "DATE_ADD", payload:date})
       
      }}
     
      androidVariant="nativeAndroid"
     
      minimumDate={time}
      textColor="#333333"
      minuteInterval={10}
      format="YYYY-mm-dd"

    />



<Button 
                    style={css.button} 
                    rounded
                    onPress={()=> {
                      props.navigation.navigate('DashBoard');
                    }}>
                    <Text style={{textTransform:"capitalize"}}>Choose Menu Items</Text>
                  </Button>
 


</View>







 



 








 

            
            
                
  
            </ScrollView>


            {/* <FooterC navigation={props.navigation} act="profile"/> */}
        </React.Fragment>
        
    )
}



export default Menutype;

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
      icons:{
        fontSize:70,
      },
      border : {
        backgroundColor:"#fff",
        display:"flex", 
        
        width:"100%",
        height:53
      },
      catf : {
        backgroundColor:"#fff",
        display:"flex",
        width:"90%", flexDirection:"row", margin:"auto"
      },
      cat: {
        width:100, borderRadius:3, marginLeft:8, marginRight:8, 
        backgroundColor:"#fff", padding:10, textAlign:"center", textAlignVertical:"center", alignItems:"center",
        justifyContent:"center", paddingVertical:10, fontWeight:"bold", borderWidth:3, borderColor:"#49bdca"
    },catact: {
      width:100, borderRadius:3, marginLeft:8, marginRight:8, 
      backgroundColor:"#49bdca", padding:10, textAlign:"center", textAlignVertical:"center", alignItems:"center",
      justifyContent:"center", paddingVertical:10, fontWeight:"bold", borderWidth:3, borderColor:"#49bdca"
  },
      t2:{
        width:"100%", alignItems:"center", fontSize:17, textAlign:"center", fontWeight:'bold',
        color:"#fff", marginTop:5, 
    },t3:{
        width:"100%", alignItems:"center", fontSize:19, textAlign:"center", fontWeight:'bold',
        color:"#444", marginTop:5
    },
      box :{
        display:"flex", flexDirection:"row", 
        alignItems:"flex-start", justifyContent:"center", height:"auto"
        
        
      },button:{
        marginTop:35, justifyContent:"center",width:"90%", color:"#49bdca", 
        backgroundColor:"#49bdca", borderRadius:8, textTransform:"none",  margin:"auto", marginLeft:"5%"
    },
   
    button2:{
        marginTop:10, justifyContent:"center",width:320, 
        backgroundColor:"#ffffff", color:"#333333"
    }

});