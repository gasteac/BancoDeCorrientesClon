import { View, Text, Image } from 'react-native'
import { globalStyles } from '../../theme/theme'

export const PlazosFijosScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.primaryText}>Plazos Fijos <Text style={{ color: 'red', fontFamily: 'Poppins-Bold' }}>404</Text></Text>
            <Image source={require('../../assets/images/workingWolves.jpeg')} resizeMode='contain' style={{ width: 300, height: 300, borderRadius: 100, marginBottom: 20 }} />
            <Text style={globalStyles.primaryText}>Disculpe las molestias.</Text>
        </View>
    )
}