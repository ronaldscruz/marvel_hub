import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'
import HeroDetail from './pages/heroDetail'
import Search from './pages/search'

import Icon from 'react-native-vector-icons/FontAwesome'
import {TouchableOpacity} from 'react-native'

const rootStack = createStackNavigator({
   Main: {
      screen: Main,
      path: '/',
      navigationOptions: ({navigation}) => ({
         title: 'MARVEL_HUB',
         headerRight: (
            <TouchableOpacity style={{marginHorizontal: 15}} onPress={() => navigation.navigate('Search')}>
               <Icon name="search" color="white" size={20}/>
            </TouchableOpacity>
         )
      })
   },
   HeroDetail: {
      screen: HeroDetail,
      path: '/hero/:id',
   },
   Search: {
      screen: Search,
      path: '/search'
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

