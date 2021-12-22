import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Switch, Linking, ScrollView, Overlay, MapView } from 'react-native';
import {useState} from "react";   
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

export default function Other() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView>
      <ScrollView>
        <View 
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            flex: 1,
            overflow: "scroll",
          }}>
          <View>        
            <Text style={{
              color: "black",
              fontSize: 30,
              fontWeight: "900",
              paddingBottom: 25,
            }}>Settings</Text>
          </View>
          <Text style={styles.text}>Notifications</Text>
          <Switch style={[{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}, {top: -20,}]}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <SafeAreaView>        
            <Text style={{
              color: "black",
              fontSize: 30,
              fontWeight: "900",
              paddingTop: 60,
              paddingBottom: 15,
            }}>Privacy Policy</Text>
          </SafeAreaView>
          <Text style={[stylesPrivacyPolicy.text, {textAlign: 'center',}]}>
            The Centre for Education in Mathematics and Computing is governed by the general principles on information and privacy of the University of Waterloo.
          </Text>
          <View>        
            <Text style={{
              color: "black",
              fontSize: 30,
              fontWeight: "900",
              paddingTop: 60,
              paddingBottom: 15,
              overflow: "scroll",
            }}>Contact Us</Text>
          </View>
          <Text style={stylesContactUs.text}>Send us an Email</Text>
          <MaterialCommunityIcons onPress={() => Linking.openURL('mailto:cemc@uwaterloo.ca')} name="email" style={[stylesContactUs.icon, {left: -22}]} size={50}/>
          <Text style={stylesContactUs.text}>Connect with us on Twitter</Text>
          <MaterialCommunityIcons onPress={() => Linking.openURL('https://twitter.com/uwaterloo_cemc')} name="twitter" style={[stylesContactUs.icon, {left: -22}]} size={50} />
          <Text style={stylesContactUs.text}>Visit our website</Text>
          <Text style={stylesContactUs.url}
          onPress={() => Linking.openURL('https://cemc.uwaterloo.ca')}>
          CEMC Website </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: '#808080',
    top: -20,
    paddingBottom: 20,
  },
});

const stylesContactUs = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    color: '#808080',
    paddingLeft: 50,
    paddingRight: 50,
  },
  icon: {
    color: "#00bdda",
    paddingLeft: 50,
  },
  url: {
    paddingTop: 20,
    fontSize: 20,
    color: '#00bdda',
    paddingLeft: 50,
    paddingRight: 50,
  }
});

const stylesPrivacyPolicy = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    fontSize: 15,
    color: '#808080',
    paddingLeft: 50,
    paddingRight: 50,
  },
});