import auth from '@react-native-firebase/auth'

const signInWithEmail = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.error(error)
  }
}

export default signInWithEmail
