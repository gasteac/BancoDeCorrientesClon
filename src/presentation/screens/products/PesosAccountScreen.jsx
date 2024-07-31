import { Image, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'

export const PesosAccountScreen = () => {
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView
            >
                <Image style={styles.cuentas} source={require('../../assets/images/cuentaFakePesos.png')} />
                <Image style={styles.cuentas} source={require('../../assets/images/cuentaFakePesos.png')} />
                <Image style={styles.cuentas} source={require('../../assets/images/cuentaFakePesos.png')} />
                <Image style={styles.cuentas} source={require('../../assets/images/cuentaFakePesos.png')} />
                <Image style={styles.cuentas} source={require('../../assets/images/cuentaFakePesos.png')} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    cuentas: {
        width: 300,
        height: 140,
        borderRadius: 10,
        margin: 10
    },
})
