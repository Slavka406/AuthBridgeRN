import {
  INIT_ONE_SIGNAL_DEVICE_END,
  INIT_ONE_SIGNAL_DEVICE_START,
  SET_DATA,
} from '../constants/reducerTypes'
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import PropTypes from 'prop-types'
import {Text} from 'react-native'
// import {ScreenLoading} from '../components';
import auth from '@react-native-firebase/auth'
import {useDeviceId} from '../hooks'

const UserAuthContext = createContext()
const UserAuthDispatchContext = createContext()

function userAuthReducer(state, action) {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        ...action.data,
        deviceId: action?.deviceId,
        _isUserAuthExists: Boolean(action.data),
      }
    }
    case INIT_ONE_SIGNAL_DEVICE_START: {
      return {...state, initializeOneSignalDeviceId: true}
    }
    case INIT_ONE_SIGNAL_DEVICE_END: {
      delete state.initializeOneSignalDeviceId
      return state
    }
    case 'RESET_DATA': {
      return {deviceId: action?.deviceId, _isUserAuthExists: false}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserAuthProvider({children}) {
  const [userAuthData, dispatch] = useReducer(userAuthReducer, {})
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const deviceId = useDeviceId()

  useEffect(() => {
    let isComponentMounted = true
    let unsubscribeFromUserAuthData = null

    if (isComponentMounted) {
      // Handle user state changes
      function onAuthStateChanged(user) {
        if (isComponentMounted && deviceId) {
          dispatch({type: SET_DATA, data: user, deviceId})

          if (initializing) {
            setInitializing(false)
          }
        }
      }

      unsubscribeFromUserAuthData =
        auth().onAuthStateChanged(onAuthStateChanged)
    }
    // need to remove
    setInitializing(false)
    return () => {
      unsubscribeFromUserAuthData?.()

      isComponentMounted = false
    }
  }, [initializing, deviceId])

  return (
    <UserAuthContext.Provider
      value={{
        ...userAuthData,
        _isUserAuthLoading: initializing,
      }}>
      <UserAuthDispatchContext.Provider value={dispatch}>
        {initializing ? <Text>loading</Text> : children}
      </UserAuthDispatchContext.Provider>
    </UserAuthContext.Provider>
  )
}
function useUserAuthContext() {
  const context = useContext(UserAuthContext)

  if (context === undefined) {
    throw new Error(
      'useUserAuthState must be used within a UserAuthContext.Provider',
    )
  }

  return context
}
function useUserAuthDispatch() {
  const context = useContext(UserAuthDispatchContext)

  if (context === undefined) {
    throw new Error(
      'useUserAuthDispatch must be used within a UserAuthContext.Provider',
    )
  }

  return context
}
function useUserAuth() {
  return [useUserAuthContext(), useUserAuthDispatch()]
}

UserAuthProvider.propTypes = {
  children: PropTypes.element,
}

export {
  UserAuthContext,
  UserAuthProvider,
  useUserAuthContext,
  useUserAuthDispatch,
  useUserAuth,
}
