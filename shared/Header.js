import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {StyleSheet, Image} from 'react-native';
import logo from '../assets/logo.png';
export default function DHeader({navigation, title}) {
    return (
 
        <Header style={{backgroundColor:"#49bdca",}}>
          <Left>
          <Button transparent style={{marginLeft:-10}}>
          <Icon name='menu' style={{fontSize: 40, }} onPress={() => navigation.openDrawer()} />
        </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
          <Image source={logo} style={{
    width: 40, height: 40, marginBottom:0, marginRight:5,
    resizeMode: 'stretch'
  }} /> 
          </Right>
        </Header>
 
    )
}

const css = StyleSheet.create({
    
})
