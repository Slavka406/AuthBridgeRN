import {Hide, Show} from '../../../../constants/assets'
import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import FastImage from '@qonsoll/react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import {signInWithEmail} from '../../helpers'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
  const handleSubmit = () => signInWithEmail(email, password)

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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconButton}>
          <FastImage
            tintColor={styles.icon.color}
            source={passwordVisible ? Hide : Show}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        start={styles.gradient.start}
        end={styles.gradient.end}
        colors={styles.gradient.colors}
        style={styles.gradient}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Sign In</Text>
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
  inputPassword: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {width: 20, height: 20, color: '#7e7e7e'},
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#c4c4c4',
    marginBottom: 20,
    height: 48,
    borderRadius: 10,
  },
})

export default SignInForm
