import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemSubheader}>{item.subheader}</Text>
      <Text style={styles.itemText}>{item.level}</Text>
      <Text style={styles.itemText}>{item.theme}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
    </View>
  );
};

const Library = () => {
  return (
    <SafeAreaView>
      <SectionList
        ListHeaderComponent={
          <Fragment>
            <StatusBar style="dark" />
            <SafeAreaView style={{ flex: 1 }}>
              <View 
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 25,
                  flex: 1,
                  overflow: "scroll",
                }}>
                <View>        
                  <Text style={{
                    color: "black",
                    fontSize: 30,
                    fontWeight: "900",
                  }}>Library</Text>
                </View>
              </View>
            </SafeAreaView>
          </Fragment>
        }
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderItem={({ item, section }) => {
          return <ListItem item={item} />;
        }}
    />
    </SafeAreaView>
  );
};

const SECTIONS = [
  {
    data: [
      {
        key: '1',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '2',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '3',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '4',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '5',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '6',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '7',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '8',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '9',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '10',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '11',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 100,
    padding: 100,
    color: "purple",
    fontSize: 40,
  },
  item: {
    margin: 10,
  },
  itemText: {
    marginTop: 5,
    color: 'black',
  },
  itemSubheader: {
    marginTop: 5,
    fontWeight: '800',
    color: 'black',
  },
});

export default Library;
