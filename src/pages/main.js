import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native'
import api from '../services/MarvelApi'

export default class Main extends Component{
   state = {
      docs: [],
      offset: 0,
      total: 0,
      orderBy: '-modified'
   }

   componentDidMount(){
      this.loadHeroes()
   }

   loadHeroes = async(offset=0) => {
      const response = await api('characters', `limit=10&offset=${offset}&orderBy=${this.state.orderBy}`)
      const {results} = response.data.data
      const { total } = response.data.data
      this.setState({docs: [...this.state.docs, ...results], total, offset})
   }

   loadMore = () => {
      const {total, docs, offset} = this.state
      if (total === docs.length) return 

      const offsetValue = offset + 10

      this.loadHeroes(offsetValue)
   }

   renderItem = ({item}) => (
      <View style={styles.listHeroesItem}>
         <TouchableOpacity onPress={() => {
            this.props.navigation.navigate(`HeroDetail`, {
               id: item.id+''
            })
         }}>
            <Image 
               source={{uri: item.thumbnail.path+'.jpg'}}
               style={{ width: 'auto', height: 290}}
            />
         </TouchableOpacity>
         <Text style={styles.listHeroesItemName}> {item.name} </Text>
      </View>
   )

   render(){
      return(
         <View style={styles.container}>
            <FlatList
               contentContainerStyle={styles.listHeroes}
               data={this.state.docs}
               keyExtractor={item => ''+item.id}
               renderItem={this.renderItem}
               onEndReached={this.loadMore}
               onEndReachedThreshold={0.1}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#232b2b',
      flex: 1
   },

   listHeroes: {
      marginVertical: 15,
   },

   listHeroesItem: {
      borderRadius: 5,
      marginVertical: 10,
      marginHorizontal: 10,
      padding: 5,
      backgroundColor: '#414a4c',
   },

   listHeroesItemName: {
      color: '#fff',
      fontSize: 20,
      padding: 7,
      fontWeight: 'bold'
   }
})