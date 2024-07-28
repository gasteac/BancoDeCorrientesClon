import { Image, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'

export const DebitCardsScreen = () => {
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView>
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/images/debitCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/images/debitCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/images/debitCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/images/debitCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
            
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