import { View, Switch, Image, StyleSheet } from 'react-native'
import { globalColors } from '../../../../theme/theme'
import { useState } from 'react';

export const DebitCard = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View>
            <Switch
                style={{ position: 'absolute', top: 15, right: 10, zIndex: 40 }}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? globalColors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
            />
            <Image
                resizeMode='contain'
                source={require('../../../../assets/images/debitCard.png')}
                style={styles.tarjetas}
            >
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    tarjetas: {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 10
    },
})