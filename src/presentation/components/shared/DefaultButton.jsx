import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { Ionicons } from './Ionicons'

export const DefaultButton = ({ icon = 'menu', label = 'Default' }) => {
    return (
        <View style={globalStyles.defaultButton}>
            <Ionicons name={icon} size={40} color="black" />
            <Text style={globalStyles.defaultButtonText}>{label}</Text>
        </View>
    )
}