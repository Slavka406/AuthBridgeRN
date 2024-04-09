import {
  FORGOT_PASSWORD_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
} from '../constants/screens'
import {ForgotPasswordScreen, SignInScreen, SignUpScreen} from '../screens'

import {createStackNavigator} from '@react-navigation/stack'
import {stackNavigatorConfig} from '../constants/stackNavigatorConfig'

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorConfig}>
      <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
      <Stack.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator
