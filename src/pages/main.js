import React, { Component } from 'react';
import { View, Text } from 'react-native'
import axios from 'axios'
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
      const response = await api('characters', 'offset=20')
      const {results} = response.data.data
      this.setState({docs: results})
   }

   render(){
      return(
         <View>
            <Text>Todos os heróis: </Text>
            {this.state.docs.map(hero => {
               return <Text key={hero.id}> {hero.name} </Text>
            })}
         </View>
      )
   }
}