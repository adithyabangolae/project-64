import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen'



export default class App extends React.Component {

  render() {
  return (
     <View>
        <HomeScreen/>
      </View>
  );
  }

}

const styles = StyleSheet.create({

});

