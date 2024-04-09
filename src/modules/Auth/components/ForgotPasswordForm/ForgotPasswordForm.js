import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useState} from 'react'

import LinearGradient from 'react-native-linear-gradient'

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Here, you would typically integrate with your authentication logic
    // For demonstration, we'll just show an alert
    Alert.alert('Login Attempt', `Email: ${email}`)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <LinearGradient
        start={styles.gradient.start}
        end={styles.gradient.end}
        colors={styles.gradient.colors}
        style={styles.gradient}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center'},
  gradient: {
    borderRadius: 10,
    height: 60,
    marginTop: 12,
    colors: ['#0B3960', '#1E5580'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 0},
  },
  button: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: 18,
  },
  input: {
    height: 48,
    borderColor: '#c4c4c4',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})

export default ForgotPasswordForm
