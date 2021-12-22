import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = props => {
  return (
    <SafeAreaView style={styles.header}>
      {/* <Button onPress={() => navigation.goBack()} title="" /> */}
      <Text style={styles.headerText}>{props.title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    margin: 25,
    overflow: "visible",
    // top: -20,
  },
  headerText: {
    color: "black",
    fontSize: 30,
    fontWeight: "900",
  },
});

export default Header;