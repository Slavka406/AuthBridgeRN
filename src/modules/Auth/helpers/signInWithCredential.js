import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

/**
 * Sign in with the provided credential.
 * @param {Object} credential - The credential object used for signing in.
 * @returns {Promise<void>} - A promise that resolves when the sign-in process is complete.
 */
const signInWithCredential = async credential => {
  try {
    const response = await auth().signInWithCredential(credential)
    const isNewUser = response?.additionalUserInfo?.isNewUser

    if (isNewUser) {
      // Create user in Firestore
    }
  } catch (error) {
    console.error(error)
  }
}

signInWithCredential.propTypes = {
  credential: PropTypes.object.isRequired,
}

export default signInWithCredential
