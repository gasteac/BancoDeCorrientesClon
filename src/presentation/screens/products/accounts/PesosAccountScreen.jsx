import { Image, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'

export const PesosAccountScreen = () => {
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView
            >
                <Image resizeMode='contain' style={styles.cuentas} source={require('../../../assets/images/cuentaComun.png')} />
                <Image resizeMode='contain' style={styles.cuentas} source={require('../../../assets/images/cuentaComun.png')} />
                <Image resizeMode='contain' style={styles.cuentas} source={require('../../../assets/images/cuentaComun.png')} />
                <Image resizeMode='contain' style={styles.cuentas} source={require('../../../assets/images/cuentaComun.png')} />
                <Image resizeMode='contain' style={styles.cuentas} source={require('../../../assets/images/cuentaComun.png')} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    cuentas: {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 10
    },
})