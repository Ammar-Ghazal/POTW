import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';
import Header from '../components/Header';

const SearchandFilter = () => {
    return (
      <View style={styles.container}>
          <Header title='Search' />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
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
  
  export default SearchandFilter;