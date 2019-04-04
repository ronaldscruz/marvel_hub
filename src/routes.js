import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'
import HeroDetail from './pages/heroDetail'

import {Button} from 'react-native'

const rootStack = createStackNavigator({
   Main: {
      screen: Main,
      path: '/',
      navigationOptions: ({navigation}) => ({
         title: 'MARVEL_HUB',
         headerRight: (
            <Button
               onPress={() => alert('Função em andamento')}
               title="Search"
            />
         )
      })
   },
   HeroDetail: {
      screen: HeroDetail,
      path: '/hero/:id',
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

