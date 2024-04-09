import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import FastImage from '@qonsoll/react-native-fast-image'
import {Logo} from '../../../constants/assets'
import {SIGN_IN_SCREEN} from '../../../constants/screens'
import {SignUpForm} from '../../../modules/Auth/components'
import {useNavigation} from '@react-navigation/native'

const SignUpScreen = () => {
  const navigation = useNavigation()

  const handleSignIn = () => navigation.navigate(SIGN_IN_SCREEN)

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
          Sign Up
        </Text>
        <SignUpForm />
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
          onPress={handleSignIn}>
          <Text
            style={{color: '#4c4c4c', fontSize: 16, fontWeight: 'semibold'}}>
            Do you have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default SignUpScreen
