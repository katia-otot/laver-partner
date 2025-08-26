import { ActivityIndicator, Text, View } from 'react-native'
import { useOTAUpdates } from '../hooks/useOTAUpdates'

export function UpdateChecker() {
  const { loading } = useOTAUpdates()
  if (!loading) return null

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <ActivityIndicator size="small" />
      <Text style={{ marginTop: 8, fontSize: 14 }}>
        Verificando actualizaciones...
      </Text>
    </View>
  )
}
