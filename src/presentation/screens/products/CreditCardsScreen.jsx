import { Image, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'

export const CreditCardsScreen = () => {
    return (
        <View style={[globalStyles.container,{paddingBottom:0}]}>
            <ScrollView>
                <Image
                    
                    source={require('../../assets/images/creditCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                 
                    source={require('../../assets/images/creditCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                    
                    source={require('../../assets/images/creditCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
                  
                    source={require('../../assets/images/creditCard.png')}
                    style={styles.imageStyle}
                >
                </Image>
                <Image
            
                    source={require('../../assets/images/creditCard.png')}
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
        height: 190,
        margin: 10,
        borderRadius:20,
    }
});