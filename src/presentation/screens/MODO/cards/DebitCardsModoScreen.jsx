import { Image, StyleSheet, Switch, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react';

export const DebitCardsModoScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView>

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
                    source={require('../../../assets/images/debitCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 10
    }
});