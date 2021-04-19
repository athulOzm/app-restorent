import React, { Component } from 'react';
import {View, Image, ImageBackground, TouchableWithoutFeedback, Keyboard, StyleSheet, Alert, StatusBar} from 'react-native';
import { Item, Input, Text, Button, Icon, CheckBox, Body} from 'native-base';
 
import bgImg from '../assets/border.png';
import logo from '../assets/logo.png';
import { connect } from 'react-redux';

import {createAuth} from '../actions/'

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       //password : ''
    }

    this._loginHandler = this._loginHandler.bind(this);
  }

 
  _loginHandler = () => {

    //this.props.navigation.navigate('DashBoard');

    const {userName} = this.state;


     this.props.userLogin({
       userName : userName,
       //password : password
     })


  }



  render(){

    const {userName} = this.state;
    const errors = this.props.errors;

    //console.log(errors);

    return (
      <React.Fragment>
      <StatusBar backgroundColor="#f98b2a" barStyle="light-content" />
    

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

              <Text style={css.h2}>Login</Text>

                  <Item rounded  style={css.inputs}>
                    <Icon active name='person' style={css.icons} />
                    <Input 
                      placeholderTextColor="#333"
                      style={css.input} 
                      placeholder='Member ID'
                      value={userName}
                      onChangeText={(userName) => {this.setState({userName:userName})}}/>
                  </Item>

                  {
                    errors ? <Text style={{
                      alignSelf:"flex-start", margin:4, marginLeft:8, color:"#333", fontWeight:"bold"
                    }}>{errors}</Text> : null
                  }

                  
    
                  {/* <Item rounded style={css.inputs}>
                    <Icon active name='person' style={css.icons}  />
                    <Input 
                    secureTextEntry={true} 
                    placeholderTextColor="#FFF"  
                    style={{ color: "#fff" }} 
                    placeholder='Password'
                    value={password}
                    onChangeText={(password) => {this.setState({password:password})}}/>
                  </Item> */}

                {/* <Item style={{marginTop:15, marginBottom:15}}>
                  <CheckBox checked={true} color="#333"/>
            
           
                  <Text style={{width:320, textAlign:"left"}}>Finish list Screen</Text>
           
                </Item> */}
    
                  <Button 
                    style={css.button} 
                    rounded
                    onPress={this._loginHandler}>
                    <Text style={{textTransform:"capitalize"}}>Login</Text>
                  </Button>

                  <Text 
                    style={{color:"#777", marginTop:40,}}
                    
                    onPress={()=>{
                      this.props.navigation.navigate('Register')
                    }}>
                    Create an Account? <Text style={{fontWeight:"bold", color:"#333"}}> Signup</Text> 
                  </Text>



                 
                  
    
              </View>
            
        
        </View>
        </TouchableWithoutFeedback>
        </React.Fragment>
    );
    
  }

 
}



const css = StyleSheet.create({
  
  frame : {
    backgroundColor:"#ffffff",
    flex:1, 
    justifyContent:"flex-start",
    alignItems:"center", 
    
    
  },
  banner:{
    backgroundColor:"#f98b2a",
    width:"100%",
    height:"30%",
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
    width: 80, height: 80, marginBottom:20, marginBottom:50,
    resizeMode: 'stretch'
  },
  icons:{
    marginLeft:10,fontSize: 20, color: '#f0811f'
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
      marginTop:15, justifyContent:"center",width:320, color:"#f0811f", 
      backgroundColor:"#e9750f", borderRadius:8, textTransform:"none"
  },
 
  button2:{
      marginTop:10, justifyContent:"center",width:320, 
      backgroundColor:"#ffffff", color:"#333333"
  }
});


const mapDispatchToProps = (dispatch) => {
  return {
    userLogin : (user) => dispatch(createAuth(user)),
  }
}

const mapStateToProps = (state) => {
  return {
    errors : state.Auth.errors
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
