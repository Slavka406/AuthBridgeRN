import appleAuth from '@invertase/react-native-apple-authentication'
import auth from '@react-native-firebase/auth'
import signInWithACredential from './signInWithCredential'

const signInWithApple = async () => {
  try {
    // Getting Apple auth data
    const appleAuthRequestResponse = await appleAuth?.performRequest({
      requestedOperation: appleAuth?.Operation?.LOGIN,
      requestedScopes: [appleAuth?.Scope?.EMAIL, appleAuth?.Scope?.FULL_NAME],
    })

    // Getting apple credential
    const appleCredential = await auth.AppleAuthProvider.credential(
      appleAuthRequestResponse?.identityToken,
      appleAuthRequestResponse?.nonce,
    )

    await signInWithACredential(appleCredential)
  } catch (error) {
    console.error(error)
  }
}

export default signInWithApple
