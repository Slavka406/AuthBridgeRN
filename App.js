import 'react-native-gesture-handler'

import {AppStackNavigator, AuthStackNavigator} from './src/navigators'
import {Keyboard, LogBox, TouchableWithoutFeedback} from 'react-native'
import {UserAuthContext, UserAuthProvider} from './src/contexts'

import {AppearanceProvider} from 'react-native-appearance'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

// Ignore warning log notification by message
LogBox.ignoreLogs(['Warning: ...'])
// Ignore all warning log notifications
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <AppearanceProvider>
        <UserAuthProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <UserAuthContext.Consumer>
                {({_isUserAuthExists}) =>
                  _isUserAuthExists ? (
                    <AppStackNavigator />
                  ) : (
                    <AuthStackNavigator />
                  )
                }
              </UserAuthContext.Consumer>
            </NavigationContainer>
          </SafeAreaProvider>
        </UserAuthProvider>
      </AppearanceProvider>
    </TouchableWithoutFeedback>
  )
}

export default App
