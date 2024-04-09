import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'

import WebView from 'react-native-webview'
import auth from '@react-native-firebase/auth'
import createCustomToken from '../modules/Auth/helpers/createCustomToken'
import sendTokenToWeb from '../modules/Auth/helpers/sendTokenToWeb'
import {useUserAuthContext} from '../contexts'

const AppStackNavigator = () => {
  const webviewRef = useRef(null)
  const {_user} = useUserAuthContext()

  const [isWebAutorized, setIsWebAutorized] = useState(false)

  useEffect(() => {
    const checkIsWebAutorized = async () => {
      const data = {isCheckAuth: true}
      const script = `window.postMessage(${JSON.stringify(data)}, "*"); true;`
      if (webviewRef.current) webviewRef.current.injectJavaScript(script)
      setIsWebAutorized(true)
    }

    if (!isWebAutorized && webviewRef.current) {
      setTimeout(() => checkIsWebAutorized(), 200)
    }
  }, [isWebAutorized])

  const signOut = async () => {
    const data = {signOut: true}
    const script = `window.postMessage(${JSON.stringify(data)}, "*"); true;`
    if (webviewRef.current) webviewRef.current.injectJavaScript(script)

    try {
      await auth().signOut()
    } catch (error) {
      console.error(error)
    }
  }

  const getMessageFromWeb = async event => {
    const message = JSON.parse(event?.nativeEvent?.data)

    if (message?.isCheckAuth && _user?.uid) {
      const uid = _user?.uid
      const token = await createCustomToken(uid)

      if (token) sendTokenToWeb(webviewRef, token)
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          height: '100%',
          borderWidth: 1,
          borderColor: 'black',
          padding: 8,
          margin: 8,
          borderRadius: 10,
        }}>
        <WebView
          ref={webviewRef}
          source={{uri: 'http://192.168.1.234:3000'}}
          onMessage={async event => await getMessageFromWeb(event)}
        />
      </View>

      <TouchableOpacity
        onPress={() => sendTokenToWeb(webviewRef)}
        style={{
          justifyContent: 'center',
          borderRadius: 10,
          alignItems: 'center',
          height: 60,
          marginTop: 20,
          marginBottom: 20,
          marginHorizontal: 20,
          backgroundColor: 'grey',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>sendTokenToWeb</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={signOut}
        style={{
          justifyContent: 'center',
          borderRadius: 10,
          alignItems: 'center',
          height: 60,
          marginTop: 0,
          marginBottom: 20,
          marginHorizontal: 20,
          backgroundColor: 'grey',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AppStackNavigator
