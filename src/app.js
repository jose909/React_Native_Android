import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import List from './components/List'
import Slide from './components/Slider'


class App extends Component{
    render(){
        return(
          <View style={[{flex: 1}, style.container]}>
            <Slide/>
            <List/>
          </View>
        )
    }
}


const style = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  }
})

export default App 