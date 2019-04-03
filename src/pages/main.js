import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import api from '../services/MarvelApi'

export default class Main extends Component{
   state = {
      docs: [],
   }

   static navigationOptions = {
      title: 'MARVEL HUB',
   }

   componentDidMount(){
      this.loadHeroes()
   }

   loadHeroes = async() => {
      const response = await api('characters')
      const {results} = response.data.data
      this.setState({docs: results})
   }

   renderItem = ({item}) => (
      <View>
         <TouchableOpacity onPress={() => {}}>
            <Image 
               source={{uri: item.thumbnail.path+'.jpg'}}
               style={{ width: 'auto', height: 300}}
            />
            <Text> {item.name} </Text>
         </TouchableOpacity>
      </View>
   )

   render(){
      return(
         <View>
            <FlatList
               data={this.state.docs}
               keyExtractor={item => ''+item.id}
               renderItem={this.renderItem}
            />
         </View>
      )
   }
}