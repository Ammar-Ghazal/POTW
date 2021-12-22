/*import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Library from './screens/Library'
import Archive from './screens/Archive'
import NewsFeed from './screens/NewsFeed'
*/
// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import "react-native-gesture-handler";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { Text, View, StyleSheet, AccessibilityInfo } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Library from "./screens/Library";
import Archive from "./screens/Archive";
import NewsFeed from "./screens/NewsFeed";
import Other from "./screens/Other";
// import Settings from "./screens/Settings";
// import PrivacyPolicy from "./screens/PrivacyPolicy";
// import ContactUs from "./screens/ContactUs";
// import { mdiMenu } from '@mdi/js';

// New Code:
//You will use the NewsFeed item, but it has already been imported earlier
// import NewsPage from "./screens/NewsPage";
// import { Actions, Router, Scene } from "react-native-router-flux";

const Tab = createBottomTabNavigator();

// tabBarOptions={{
//   // activeTintColor: '#e91e63',
//   activeTintColor: '#00bdda',
//   inactiveTintColor: 'black',
//   activeBackgroundColor: 'white',
//   inactiveBackgroundColor: 'white',
//   labelStyle: {
//     fontSize: 14,
//     color: "black",
//     fontWeight: "bold",
//     margin: 0,
//     padding: 0,
//   },
//   // activeBackgroundColor: '#00bdda',
//   // inactiveBackgroundColor: '#00bdda',
//   style: {
//     // backgroundColor: '#00bdda',
//     // backgroundColor: 'white',
//     borderTopWidth: 2,
//     borderTopColor: 'black',
//   }
// }}



function MyTabs() {
	return (
    <Tab.Navigator
    initialRouteName="Home"
    // tabBarOptions={{
    //   // activeTintColor: '#e91e63',
    //   activeTintColor: '#00bdda',
    //   inactiveTintColor: 'black',
    //   activeBackgroundColor: 'white',
    //   inactiveBackgroundColor: 'white',
    //   labelStyle: {
    //     fontSize: 14,
    //     color: "black",
    //     fontWeight: "bold",
    //     margin: 0,
    //     padding: 0,
    //   },
    //   // activeBackgroundColor: '#00bdda',
    //   // inactiveBackgroundColor: '#00bdda',
    //   style: {
    //     // backgroundColor: '#00bdda',
    //     // backgroundColor: 'white',
    //     borderTopWidth: 2,
    //     borderTopColor: 'black',
    //   }
    // }}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#00bdda',
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
      },
      tabBarStyle: {
        borderTopWidth: 2,
        borderTopColor: 'black',
      },
    }}
    // screenOptions={[{
    //   "tabBarActiveTintColor": "#00bdda",
    //   "tabBarInactiveTintColor": "black",
    //   "tabBarActiveBackgroundColor": "white",
    //   "tabBarInactiveBackgroundColor": "white",
    //   "tabBarLabelStyle": {
    //     "fontSize": 14,
    //     "color": "black",
    //     "fontWeight": "bold",
    //     "margin": 0,
    //     "padding": 0
    //   },
    //   "tabBarStyle": [
    //     {
    //       "display": "flex"
    //     },
    //     null
    //   ]
    // }]}
    // screenOptions={{
    //   tabBarActiveTintColor: "#",
    // }}
    >
    <Tab.Screen
      name="Home"
      component={Home}
      textWeight="800"
      options={{
        // tabBarBadge: 18,
        // tabBarBadgeStyle: {backgroundColor: "yellow"},
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}  
    />
    <Tab.Screen
      name="Library"
      component={Library}
      options={{
        tabBarLabel: "My Library",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="book-open-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Archive"
      component={Archive}
      options={{
        tabBarLabel: "Archive",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="book-search-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="NewsFeed"
      component={NewsFeed}
      options={{
        tabBarLabel: "News Feed",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="newspaper"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Other"
      component={Other}
      options={{
        tabBarLabel: "Other",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="menu"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
//   <Tab.Navigator
//   initialRouteName="Home"
//   tabBarOptions={{
//     // activeTintColor: '#e91e63',
//     activeTintColor: '#00bdda',
//     inactiveTintColor: 'black',
//     activeBackgroundColor: 'white',
//     inactiveBackgroundColor: 'white',
//     labelStyle: {
//       fontSize: 12,
//       color: "black",
//       fontWeight: "bold",
//       margin: 0,
//       padding: 0,
//     },
//     // activeBackgroundColor: '#00bdda',
//     // inactiveBackgroundColor: '#00bdda',
//     style: {
//       // backgroundColor: '#00bdda',
//       // backgroundColor: 'white',
//       borderTopWidth: 2,
//       borderTopColor: 'black',
//     }
//   }}
//   // screenOptions={{
//   //   tabBarActiveTintColor: "#",
//   // }}
//   >
//   <Tab.Screen
//     name="Home"
//     component={Home}
//     textWeight="800"
//     options={{
//       // tabBarBadge: 18,
//       // tabBarBadgeStyle: {backgroundColor: "yellow"},
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => (
//         <MaterialCommunityIcons name="home" color={color} size={30} />
//       ),
//     }}  
//   />
//   <Tab.Screen
//     name="Library"
//     component={Library}
//     options={{
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => (
//         <MaterialCommunityIcons
//           name="book-open-outline"
//           color={color}
//           size={30}
//         />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="Archive"
//     component={Archive}
//     options={{
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => (
//         <MaterialCommunityIcons
//           name="book-search-outline"
//           color={color}
//           size={30}
//         />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="NewsFeed"
//     component={NewsFeed}
//     options={{
//       tabBarLabel: "",
//       tabBarIcon: ({ color, size }) => (
//         <MaterialCommunityIcons
//           name="newspaper"
//           color={color}
//           size={30}
//         />
//       ),
//     }}
//   />
// </Tab.Navigator>
	);
}

export default function App() {
	return (
    // <>
    //   <NavigationContainer independent={true}>
    //     <MyDrawer />
    //   </NavigationContainer>
    //   <NavigationContainer independent={true}>
    //     <MyTabs />
    //   </NavigationContainer>
    // </>
    // <>
    //   <NavigationContainer independent={true}>
    //     <MyTabs />
    //   </NavigationContainer>
    //   <Router>
    //     <Scene key="app">
    //       <Scene key="scene1" component={NewsFeed}></Scene>
    //       <Scene key="scene2" component={NewsPage}></Scene>
    //     </Scene>
    //   </Router>
    // </>
    <NavigationContainer 
      independent={true}
    >
      <MyTabs />
    </NavigationContainer>
	);
}

// const Drawer = createDrawerNavigator();
// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName={Home}
//     options={{
//       navigatorIcon: ({focused, size}) => (
//         <MaterialCommunityIcons path={mdiMenu} name="hamburger" color={"green"} size={30} />
//      ),
//     }}>
//       <Drawer.Screen
//         name="Home"
//         component={Home}
//         // options={{ drawerLabel: 'Settings' }}
//         options={{
//           title:'Home',
//       }}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={Settings}
//         // options={{ drawerLabel: 'Settings' }}
//       />
//       <Drawer.Screen
//         name="ContactUs"
//         component={ContactUs}
//         // options={{ drawerLabel: 'Contact Us' }}
//       />
//       <Drawer.Screen
//         name="PrivacyPolicy"
//         component={PrivacyPolicy}
//         // options={{ drawerLabel: 'Privacy Policy' }}
//       />
//     </Drawer.Navigator>
//   );
// }

/* Second Attempt 
export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home-outline" color={tintColor} size={24} />
      )
    }
  },
  Library: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'My Library',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bookmarks-outline" color={tintColor} size={24} />
      )
    }
  },
  Archive: {
    screen: Archive,
    navigationOptions: {
      tabBarLabel: 'Archive',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
      )
    }
  },
  NewsFeed: {
    screen: NewsFeed,
    navigationOptions: {
      tabBarLabel: 'NewsFeed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paper-outline" color={tintColor} size={24} />
      )
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'blue',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
/* OLD VERSION 
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library!</Text>
    </View>
  );
}

function ArchiveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Archive!</Text>
    </View>
  );
}

function NewsfeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News Feed!</Text>
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Archive" component={ArchiveScreen} />
        <Tab.Screen name="NewsFeed" component={NewsfeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
