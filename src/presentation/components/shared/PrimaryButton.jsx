import { Text, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'

export const PrimaryButton = ({ label, onPress, color = 'white' }) => {
  return (
    <Pressable
      onPress={onPress}
      // onPress={()=>onPress()}
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.primaryButtonText}>{label}</Text>
    </Pressable>
  )
}