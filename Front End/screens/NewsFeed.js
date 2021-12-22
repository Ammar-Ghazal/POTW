import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header'
import { Fragment } from 'react';
import { Alert, TouchableHighlight, TouchableWithoutFeedback, Linking } from 'react-native';

const ListItem = ({ item }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <TouchableHighlight 
      onPress={() => {
        if (visibility){
          setVisibility(false);
        } else {
          setVisibility(true);
        }
      }}
      underlayColor="#e5e5e5"
      activeOpacity="1"
    >
      <View style={[styles.item, {borderWidth: 2, borderColor:"#e5e5e5", padding: 15}]}>
        <View style={{flexDirection: "row"}}>
          {/* For Images: */}
          {/* <Image
            style={{
              width: 50,
              height: 50,
              margin: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}
            source={{
              uri: item.image,
            }}
          /> */}
          <View style={{flexDirection: "column", flex:1,}}>
            <Text style={[styles.header]}>{item.header}</Text>
            <Text style={[styles.text]}>{item.text}</Text>
            <Text style={[styles.date]}>{item.date}</Text>
          </View>
          <View style={styles.chevron}>
            {!visibility && <MaterialCommunityIcons name="chevron-right" size={25}></MaterialCommunityIcons>}
            {visibility && <MaterialCommunityIcons name="chevron-down" size={25}></MaterialCommunityIcons>}
          </View>
        </View>
        {visibility && 
          <View style={{
            flexDirection: "column", 
            paddingTop: 10
          }}>
            <Text style={styles.fullText}>{item.fullText}</Text>
          </View>}
      </View>
    </TouchableHighlight>
  );
};

const NewsFeed = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        ListHeaderComponent={
          <Fragment>
            <StatusBar style="dark" />
            <Header title='News Feed' />
          </Fragment>
        }
        contentContainerStyle={{ paddingHorizontal: 7,}}
        stickySectionHeadersEnabled={false}
        sections={data}
        renderItem={({ item, section }) => {
          return <ListItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chevron: {
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  date: {
    color: '#4a4d52',
  },
  header: {
		color: 'black',
    marginTop: 5,
    fontWeight: '800',
	},
  item: {
    margin: -1,
  },
  text: {
    marginTop: 5,
    color: 'black',
  },
});

const data = [
  {
    data: [
      {
        key: '1',
        header: 'CIMC for Grades 9&10',
        text: 'The Canadian Intermediate ....',
        fullText: <Text>The Canadian Intermediate Mathematics Contest for Grades 9 and 10 is being written on November 17 or 18. Our registration deadline is October 26. For more information, go to <Text style={{color: '#00bdda'}} onPress={() => Linking.openURL('http://www.cemc.uwaterloo.ca/contests/csimc.html')}>http://www.cemc.uwaterloo.ca/contests/csimc.html</Text>. We hope that you will be able to participate in some of our contests this year!</Text>,
        date: 'October 7, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '2',
        header: 'BCC Challenge',
        text: 'In addition to POTW, the CEMC ....',
        fullText: <Text>In addition to POTW, the CEMC also offers mathematics and computer science contests such as the Beaver Computing Challenge (BCC). The BCC will take place during the weeks of November 8 and 15, and there is a challenge offered at the Grade 5/6, 7/8, and 9/10 levels. Registration closes on October 27, 2021. To get more information please visit: <Text style={{color: '#00bdda'}} onPress={() => Linking.openURL('http://www.cemc.uwaterloo.ca/contests/bcc.html')}>http://www.cemc.uwaterloo.ca/contests/bcc.html</Text>.</Text>,
        date: 'September 30, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '3',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '4',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '5',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '6',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '7',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '8',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '9',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '10',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
      {
        key: '11',
        header: 'Header',
        text: 'Did you know? The CEMC has ....',
        date: 'May 24, 2021',
        image: 'https://picsum.photos/100',
      },
    ],
  },
];

export default NewsFeed;