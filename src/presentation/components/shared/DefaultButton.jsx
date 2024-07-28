import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { Ionicons } from './Ionicons'

export const DefaultButton = ({ icon = 'menu', label = 'Default', onPress }) => {
    return (

        <Pressable style={globalStyles.defaultButton} onPress={onPress}>
            <Ionicons name={icon} size={40} color="black" />
            <Text style={globalStyles.defaultButtonText}>{label}</Text>
        </Pressable>
    )
}