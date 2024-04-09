import auth from '@react-native-firebase/auth'

const signUpWithEmail = async (email, password) => {
  console.log('email', email, 'password', password) // Need to remove this line
  try {
    await auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    console.error(error)
  }
}

export default signUpWithEmail
