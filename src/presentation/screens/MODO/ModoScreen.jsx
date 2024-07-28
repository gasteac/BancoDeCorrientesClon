import { View } from 'react-native'
import { HamburguerMenu } from '../../components/shared/HamburguerMenu'
import { DefaultButton } from '../../components/shared/DefaultButton'
import { globalStyles } from '../../theme/theme'

export const ModoScreen = () => {
    return (
        <>
            <View style={globalStyles.container}>
                <HamburguerMenu />
                <DefaultButton label='Cuentas' icon='file-tray-full-outline' />
                <DefaultButton label='Tarjetas' icon='card-outline' />
            </View>
        </>
    )
}