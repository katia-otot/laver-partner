import * as Updates from 'expo-updates'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
/* global __DEV__ */

export function useOTAUpdates() {
  const [loading, setLoading] = useState(false)

  const checkAndUpdate = async () => {
    if (__DEV__) {
      console.log('OTA Updates are not available on development')
      return
    }
    setLoading(true)

    try {
      const update = await Updates.checkForUpdateAsync()

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync()
        Alert.alert('Actualización lista', 'Reiniciando...', [], { cancelable: false })
        setTimeout(() => Updates.reloadAsync(), 1000)
      }
    }
    catch (error) {
      console.log('Update error:', error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAndUpdate()
  }, [])

  return { loading, checkAndUpdate }
}