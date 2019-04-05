import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'
import HeroDetail from './pages/heroDetail'
<<<<<<< HEAD
import Search from './pages/search'

import Icon from 'react-native-vector-icons/FontAwesome'
import {Button, Text, TouchableOpacity} from 'react-native'
=======

import {Button} from 'react-native'
>>>>>>> 9e8842fb7b7926d276a38522f59d568ce6d710d3

const rootStack = createStackNavigator({
   Main: {
      screen: Main,
      path: '/',
      navigationOptions: ({navigation}) => ({
         title: 'MARVEL_HUB',
         headerRight: (
<<<<<<< HEAD
            // <Button
            //    onPress={() => navigation.navigate('/search')}
            //    title= <Icon name="search" color="white"/> + "Search"
            //    color="#0e1111"
            // />
            <TouchableOpacity style={{marginHorizontal: 15}} onPress={() => navigation.navigate('Search')}>
               <Icon name="search" color="white" size={20}/>
            </TouchableOpacity>
=======
            <Button
               onPress={() => alert('Função em andamento')}
               title="Search"
            />
>>>>>>> 9e8842fb7b7926d276a38522f59d568ce6d710d3
         )
      })
   },
   HeroDetail: {
      screen: HeroDetail,
      path: '/hero/:id',
<<<<<<< HEAD
   },
   Search: {
      screen: Search,
      path: '/search'
=======
>>>>>>> 9e8842fb7b7926d276a38522f59d568ce6d710d3
   }
}, {
   defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
         backgroundColor: "#0e1111"
      },
      headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: 22
      },
   }
})

const Routes = createAppContainer(rootStack)

export default Routes

