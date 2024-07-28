import React from 'react';
import { StyleSheet, Image } from 'react-native';
export const DebitCard = () => {
    return (
        <Image
            resizeMode='contain'
            source={require('../../../presentation/assets/images/debitCard.png')}
            style={styles.imageStyle}
        >
        </Image>
    );
};
const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 10
    }
});


