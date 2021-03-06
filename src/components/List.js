import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList, 
  Image
} from 'react-native';

const shows_first = [
    {
      "key":1,
      "name":"24: Legacy",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
   },
   {
      "key":2,
      "name":"Colony",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg"
   },
   {
      "key":3,
      "name":"The Walking Dead",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
   },
   {
      "key":4,
      "name":"Taken",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
   },
   {
      "key":5,
      "name":"This is us",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
   }
   
]

const shows_second = [
    {
      "key":6,
      "name":"Superstore",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
   },
   {
      "key":7,
      "name":"Lethal Weapon",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
   },
   {
      "key":8,
      "name":"The 100",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
   },
   {
      "key":9,
      "name":"Homeland",
      "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
   }
]

class List extends Component{
  _renderItem(item){
    return(
      <Image style={{width: 120, height:180}} source={{uri: item.image}}/>
    )
  }
    render(){
        return(
            <View style={{flex: 1 }}>
               <View>
                  <Text style={style.text}>My List</Text>
                  <FlatList 
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{width: 5}} />}
                    renderItem={({item}) => this._renderItem(item)}
                    data={shows_first}
                  />
                  </View>
                   <View>
                  <Text style={style.text}>Top Picks For You</Text>
                  <FlatList 
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{width: 5}} />}
                    renderItem={({item}) => this._renderItem(item)}
                    data={shows_second}
                  />
                  </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
  text:{
    color: 'white'
  }
})
export default List