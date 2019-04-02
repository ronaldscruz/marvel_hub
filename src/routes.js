import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'

const rootStack = createStackNavigator({
   Main,
}, {
   defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
         backgroundColor: "#000"
      }
   }
})

const Routes = createAppContainer(rootStack)

export default Routes

