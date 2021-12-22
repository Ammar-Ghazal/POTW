import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from  './components/auth/Register'
import LoginScreen from  './components/auth/Login'
import FileSearchScreen from  './components/auth/FileSearch'
import FileViewScreen from  './components/auth/FileView'
import FileViewOfflineScreen from  './components/auth/FileViewOffline'
import FileDownloadScreen from  './components/auth/FileDownload'
import firebase from 'firebase'

//var searchList = new List; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //NOTE:: When app is up and running, use enivroment variables
  // to hide this, or people will be able to access all this info. 
  apiKey: "AIzaSyBNSVSV2YRrl1qZHKzcL3rzKFJRPdJgSiQ",
  authDomain: "problem-of-the-week.firebaseapp.com",
  projectId: "problem-of-the-week",
  storageBucket: "problem-of-the-week.appspot.com",
  messagingSenderId: "490986024142",
  appId: "1:490986024142:web:618131ff8cef98342e749f",
  measurementId: "G-KNBNLLWNXM"
};


if(firebase.apps.length === 0){
  //making sure we aren't running a firebase app already!
  console.log("in here")
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,

    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {      
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="FileView" component={FileViewScreen}/>
        <Stack.Screen name="FileViewOffline" component={FileViewOfflineScreen}/>
        <Stack.Screen name="FileSearch" component={FileSearchScreen}/>
        <Stack.Screen name="FileDownload" component={FileDownloadScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
    /*
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View>
         <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="FileView" component={FileViewScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name="FileView" component={FileViewScreen}/>
        <Stack.Screen name="FileDownload" component={FileDownloadScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
*/
  }

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
