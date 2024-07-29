import { Pressable, Text, View } from 'react-native'
import { HamburguerMenu } from '../../components/shared/HamburguerMenu'
import { DefaultButton } from '../../components/shared/DefaultButton'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'

export const ModoScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={globalStyles.container}>
                <HamburguerMenu />
                <Text style={[globalStyles.primaryText, { alignSelf: 'center', fontSize: 15, textAlign: 'center' }]}>
                    Elegí tus cuentas o tarjetas favoritas para realizar operaciones con MODO.
                </Text>
                <DefaultButton label='Cuentas' icon='file-tray-full-outline' onPress={() => navigation.navigate('Cuenta Favorita MODO')}/>
                <DefaultButton label='Tarjetas' icon='card-outline' onPress={() => navigation.navigate('Tarjetas Favoritas MODO')} />
            </View>
        </>
    )
}