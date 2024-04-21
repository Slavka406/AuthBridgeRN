import {
  GOOGLE_ANDROID_WEB_CLIENT_ID,
  GOOGLE_IOS_WEB_CLIENT_ID,
} from '../../../constants/googleWebClients'

import {GoogleSignin} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import {isIOS} from '../../../constants'
import signInWithCredential from './signInWithCredential'

const signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId: isIOS
        ? GOOGLE_IOS_WEB_CLIENT_ID
        : GOOGLE_ANDROID_WEB_CLIENT_ID,
    })

    const {idToken} = await GoogleSignin.signIn()

    // Getting google credential
    const credential = auth.GoogleAuthProvider.credential(idToken)

    await signInWithCredential(credential)
  } catch (error) {
    console.error(error)
  }
}

export default signInWithGoogle
