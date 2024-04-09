import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import FastImage from '@qonsoll/react-native-fast-image'
import {ForgotPasswordForm} from '../../../modules/Auth/components'
import {Logo} from '../../../constants/assets'
import {SIGN_UP_SCREEN} from '../../../constants/screens'
import {useNavigation} from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()

  const handleSignUp = () => navigation.navigate(SIGN_UP_SCREEN)

  return (
    <SafeAreaView style={{marginHorizontal: 40, flex: 1}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 32,
        }}>
        <FastImage
          source={Logo}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
      </View>

      <View style={{marginBottom: 16}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 24,
          }}>
          Forgot Password
        </Text>
        <ForgotPasswordForm />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 12,
        }}>
        <TouchableOpacity
          style={{borderBottomWidth: 1, borderBottomColor: '#4c4c4c'}}
          onPress={handleSignUp}>
          <Text
            style={{color: '#4c4c4c', fontSize: 16, fontWeight: 'semibold'}}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default ForgotPasswordScreen
