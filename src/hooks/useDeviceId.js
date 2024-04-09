import {useEffect, useState} from 'react'

import {getUniqueId} from 'react-native-device-info'

/**
 * Custom hook to get the unique device ID.
 *
 * @returns {string|null} The unique device ID.
 */
const useDeviceId = () => {
  const [deviceId, setDeviceId] = useState(null)

  useEffect(() => {
    let isComponentMounted = true

    const getData = async () => {
      // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
      // Android: "dd96dec43fb81c97"
      // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
      const uniqueId = await getUniqueId()

      isComponentMounted && setDeviceId(uniqueId)
    }
    !deviceId && getData()

    return () => (isComponentMounted = false)
  }, [deviceId])

  return deviceId
}

export default useDeviceId
