import React, { Component } from 'react';
import {View, Image, ImageBackground, TouchableWithoutFeedback, Keyboard, StyleSheet, Alert, StatusBar} from 'react-native';
import { Item, Input, Text, Button, Icon, CheckBox, Body} from 'native-base';
 
import bgImg from '../assets/border.png';
import logo from '../assets/logo.png';
import { connect } from 'react-redux';

import {actRegister} from '../actions'

class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user_name : '',
             email:'',
             memberid : '',
             phone:''
        }

        this._RegisterHandler = this._RegisterHandler.bind(this);
    }

    _RegisterHandler = ()=>{

      this.props.register(this.state)
    }


    render() {
    const {user_name, email, memberid, phone} = this.state;
        


        return (
          <React.Fragment>
          <StatusBar backgroundColor="#49bdca" barStyle="light-content" />
        
    
          <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
    
            <View style={css.frame}>
    
    
              <View style={css.banner}>
                  <Image source={logo} style={css.logo} /> 
                  <Text style={css.h1}>restoapp</Text>
              </View>
    
    
              <ImageBackground 
                source={bgImg} 
                style={css.border}
                >
                  
                
              </ImageBackground>
    
    
             
        
                  <View style={css.box}>
    
                  <Text style={css.h2}>Member Signup</Text>










                <Item rounded  style={css.inputs}>
                  <Icon active name='person' style={css.icons} />
                  <Input 
                    placeholderTextColor="#333"
                    style={css.input} 
                    placeholder='Name'
                    value={user_name}
                    onChangeText={(user_name) => {this.setState({user_name:user_name})}}/>
                </Item>

                <Item rounded  style={css.inputs}>
                  <Icon active name='mail' style={css.icons} />
               
                  <Input 
                    placeholderTextColor="#333"
                    style={css.input} 
                    placeholder='Email ID'
                    value={email}
                    onChangeText={(email) => {this.setState({email:email})}}/>
                </Item>

                <Item rounded  style={css.inputs}>
                  <Icon active type="FontAwesome" name="phone" style={css.icons} />
                  <Input 
                    placeholderTextColor="#333"
                    style={css.input} 
                    placeholder='Phone'
                    value={phone}
                    onChangeText={(phone) => {this.setState({phone:phone})}}/>
                </Item>
  
                <Item rounded style={css.inputs}>
                  <Icon active name='person' style={css.icons}  />
                  <Input 
                  placeholderTextColor="#333"  
                  style={{ color: "#111" }} 
                  placeholder='Create Member ID (Min 6 Cha)'
                  value={memberid}
                  onChangeText={(memberid) => {this.setState({memberid:memberid})}}/>
                </Item>

                
  
                <Button 
                  style={css.button} 
                  rounded
                  onPress={this._RegisterHandler}>
                  <Text style={{textTransform:"capitalize"}}>Register</Text>
                </Button>









                </View>
            
        
            </View>
            </TouchableWithoutFeedback>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
  
  return {
    register : (user) => dispatch(actRegister(user)) 
  }
}


export default connect(null, mapDispatchToProps)(Register);

const css = StyleSheet.create({
  
  frame : {
    backgroundColor:"#ffffff",
    flex:1, 
    justifyContent:"flex-start",
    alignItems:"center", 
    
    
  },
  banner:{
    backgroundColor:"#49bdca",
    width:"100%",
    height:"20%",
    justifyContent:"center",
    alignItems:"center",
  },
  border : {
    backgroundColor:"#fff",
    display:"flex", 
    
    width:"100%",
    height:80
  },
  box : {
    justifyContent:"center",
    alignItems:"center",
    height:"60%"
  },
  head1:{
    fontSize:17
  },
  logo:{
    width: 60, height: 60, marginBottom:20, marginBottom:50,
    resizeMode: 'stretch'
  },
  icons:{
    marginLeft:10,fontSize: 20, color: '#49bdca'
  },
  h1:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold",
    marginTop:-50
  },
  h2:{
    fontSize:23,
    color:"#333",
    fontWeight:"bold",
    marginBottom:25
  },

  inputs : {
    width:320, 
    marginTop:10,
    color:"#fff",borderRadius:8, borderColor:"#bab9b9", borderBottomWidth:1, borderRightWidth:1
   
  },
  input:{
    color:"#111",fontSize: 16, 
   
  },
 
  button:{
      marginTop:15, justifyContent:"center",width:320, color:"#49bdca", 
      backgroundColor:"#49bdca", borderRadius:8, textTransform:"none"
  },
 
  button2:{
      marginTop:10, justifyContent:"center",width:320, 
      backgroundColor:"#ffffff", color:"#333333"
  }
});