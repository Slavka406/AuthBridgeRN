import {
  FORGOT_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../../../constants/screens'
import {
  Logo,
  SocialApple,
  SocialFacebook,
  SocialGoogle01,
} from '../../../constants/assets'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {signInWithApple, signInWithGoogle} from '../../../modules/Auth/helpers'

import FastImage from '@qonsoll/react-native-fast-image'
import {SignInForm} from '../../../modules/Auth/components'
import {isIOS} from '../../../constants'
import {useNavigation} from '@react-navigation/native'

const SignInScreen = () => {
  const navigation = useNavigation()

  const handleSignUp = () => navigation.navigate(SIGN_UP_SCREEN)
  const handleForgotPassword = () => navigation.navigate(FORGOT_PASSWORD_SCREEN)

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
          Sign In
        </Text>
        <SignInForm />
      </View>

      <TouchableOpacity
        style={{width: '100%', alignItems: 'center'}}
        onPress={handleForgotPassword}>
        <Text style={{color: '#4c4c4c', fontSize: 16, fontWeight: 'semibold'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.leftDivider} />
        <Text style={{marginHorizontal: 20}}>Or</Text>
        <View style={styles.rightDivider} />
      </View>

      <View style={styles.socialButtonsContainer}>
        {/* Google button */}
        <TouchableOpacity
          onPress={signInWithGoogle}
          style={styles.socialButton}>
          <FastImage source={SocialGoogle01} style={styles.socialIcon} />
        </TouchableOpacity>

        {/* Apple button */}
        {!!isIOS && (
          <TouchableOpacity
            onPress={signInWithApple}
            style={styles.centerSocialButton}>
            <FastImage source={SocialApple} style={styles.socialIcon} />
          </TouchableOpacity>
        )}

        {/* Facebook button */}
        <TouchableOpacity style={styles.socialButton}>
          <FastImage source={SocialFacebook} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginBottom: 12}}>
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

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    marginTop: 32,
  },
  leftDivider: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderColor: '#c4c4c4',
  },
  rightDivider: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderColor: '#c4c4c4',
  },
  socialButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    gap: 20,
  },
  centerSocialButton: {
    width: 84,
    height: 74,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  socialButton: {
    width: 80,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  socialIcon: {
    width: 32,
    height: 32,
  },
})

export default SignInScreen
