import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'

const rootStack = createStackNavigator({
   Main,
}, {
   defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
         backgroundColor: "#0e1111"
      },
      headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: 22
      }
   }
})

const Routes = createAppContainer(rootStack)

export default Routes

