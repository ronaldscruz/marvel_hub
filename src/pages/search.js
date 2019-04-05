import React, { Component } from 'react';
<<<<<<< HEAD
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

import { SearchBar } from 'react-native-elements'
import { search, close } from 'react-native-vector-icons/FontAwesome'

import api from '../services/MarvelApi'
import { ScrollView, FlatList } from 'react-native-gesture-handler';

export default class Search extends Component{
   state = {
      searchValue: '',
      searchResults: []
   }

   static navigationOptions = {
      title: 'Search hero',
   }

   updateSearchValue = searchValue => {
      this.setState({searchValue})
      this.searchHero(searchValue)
   }

   searchHero = async(nameStart) => {
      const response = await api('characters', `nameStartsWith=${nameStart}&limit=80`).catch(err => {
         this.setState({searchResults: 'error'})
      })
      const { results } = response.data.data

      if(!results) 
         return this.setState({searchResults: results})

      return this.setState({searchResults: results})     
   }

   renderItem = ({item}) => {
      if (item === 'error') return

      return <TouchableOpacity onPress={() => (
         this.props.navigation.navigate('HeroDetail', {
            id: item.id+''
         })
      )}>
         <ImageBackground
            source={{uri: item.thumbnail.path+'.jpg'}}
            style={styles.resultsListItemBg}
         >
            <View style={styles.resultsListItem}>
               <Text style={styles.resultsListItemName}>{item.name}</Text>
            </View>
         </ImageBackground>
      </TouchableOpacity>
   }

   render(){
      return(
         <ScrollView style={styles.container}>
            <View>
               <SearchBar
                  placeholder="hero name starts with..."
                  onChangeText={this.updateSearchValue}
                  value={this.state.searchValue}
                  icon={{name: search}}
                  cancelIcon={{name: close}}
               />
               <FlatList
                  data={this.state.searchResults}
                  contentContainerStyle={styles.resultList}
                  keyExtractor={item => item.id+''}
                  renderItem={this.renderItem}
               />
            </View>   
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#232b2b',
      flex: 1
   },

   resultList: {
      marginVertical: 15
   },

   resultsListItemBg: {
      width: '100%',
   },

   resultsListItem: {
      paddingHorizontal: 10,
      paddingVertical: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
   },

   resultsListItemName: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
   },
})
=======
import { SearchBar } from 'react-native-elements'
import api from '../services/MarvelApi'

export default class Search extends React.Component{
   state = {
      searchValue: '',
   }
}
>>>>>>> 9e8842fb7b7926d276a38522f59d568ce6d710d3
