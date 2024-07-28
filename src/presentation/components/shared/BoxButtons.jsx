import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { Ionicons } from './Ionicons'

export const BoxButtons = ({ label, icon }) => {
    return (
        <View style={globalStyles.boxButton}>
            <Ionicons name={icon} color='white'/>
            <Text style={globalStyles.boxButtonText}>{label}</Text>
        </View>
    )
}