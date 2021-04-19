import 'react-native-gesture-handler';
import * as React from 'react';

import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { 
  createStackNavigator, 
  CardStyleInterpolators, 
  TransitionSpecs
 } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';
import {getUserFetch} from './actions';
 
import Login from './screens/Login';
import LoadingScreen from './screens/LoadingScreen';
import DashBoardDrawer from './_navigation/DashBoardDrawer';
import Profile from './screens/Profile';
import Register from './screens/Register';

const Stack = createStackNavigator();



class App extends React.Component{

  constructor(props) {
    super(props)

    this.checkAuth = this.checkAuth.bind(this);
  }

  
  checkAuth = async () => {
    try {
        const value = await AsyncStorage.getItem('jwtoken')
        if(value !== null) {
          this.props.getUserFetch();
        } else{
          this.props.loadApp();
        }
    } 
    catch(e) {
      console.log(e)}
  }

 



  componentDidMount(){

    this.checkAuth();
    
      SplashScreen.hide();
  
  }

 

  render(){


    if(this.props.loading){
      return (<LoadingScreen />)
     // SplashScreen.show(this, R.style.SplashScreenTheme);

    }
  
    
 
    return (
      <NavigationContainer>
  
        <Stack.Navigator 
          screenOptions={{
            gestureEnabled:true,
            gestureDirection:"horizontal",
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle:{
              backgroundColor:"#f98b2a",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize:16,
            }, 
          }}
          headerMode="float"
           
          >
          {this.props.isLogedin
            ? (<React.Fragment>

              <Stack.Screen 
                  name="DashBoard" 
                  component={DashBoardDrawer}
                  options={{
                    headerShown:false,
                  }} />

              <Stack.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                  headerShown:false,
                }}/>
                </React.Fragment>
              
              ) 
            : (
                <React.Fragment>
                  <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                      headerShown: false
                    }} 
                  />
                  <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{
                      headerShown:false
                    }}
                  />
                </React.Fragment>
                  
              )
            }

            


          
          
        </Stack.Navigator>
  
      </NavigationContainer>
    )
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    getUserFetch : () => dispatch(getUserFetch()),
    loadApp : () => dispatch({type:'LOADED'}),
    
  }
}

const mapStateIntoProps = (state) => {

  return {
    loading : state.Loading.isLoading,
    isLogedin : state.Auth.isLogedin,
    isLog : state.Auth,

  }
}


export default connect(mapStateIntoProps, mapDispatchToProps)(App);
 