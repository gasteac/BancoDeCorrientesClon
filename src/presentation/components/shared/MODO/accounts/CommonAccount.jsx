import { View, Switch, Image, StyleSheet } from 'react-native'
import { globalColors } from '../../../../theme/theme'
import { useState } from 'react';

export const CommonAccount = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View>
            <Switch
                style={{ position: 'absolute', bottom: 15, right: 10, zIndex: 40 }}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? globalColors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
            />
            <Image resizeMode='contain' style={styles.cuentas} source={require('../../../../assets/images/cuentaComun.png')} />
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