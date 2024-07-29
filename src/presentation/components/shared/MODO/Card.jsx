import { View, Switch, StyleSheet, Text, Image } from 'react-native';
import { globalColors } from '../../../theme/theme';

export const Card = ({ card, isFavorite, onFavoriteSelect, credito=false }) => {
    return (
        <View style={[styles.cardContainer, isFavorite && styles.favoriteCard]}>
            <Image source={require('../../../assets/images/BancoTarjetas.png')} resizeMode='contain' style={{ width: 100, height: 100, position: 'absolute', top: -20, right: 20, tintColor: credito ? 'black' : 'gray' }} />
            <Switch
                style={{ position: 'absolute', alignSelf: 'center', bottom: '50%', right: 10, zIndex: 40 }}
                trackColor={{ false: '#767577', true: '#e7e7e7' }}
                thumbColor={isFavorite ? '#a0a0a0' : '#f4f3f4'}
                onValueChange={onFavoriteSelect}
                value={isFavorite}
            />
            <View style={styles.cardDetails}>
                {credito ? <Text style={styles.cardType}>Tarjeta de Crédito</Text> : <Text style={styles.cardType}>Tarjeta de Débito</Text>}
                <Text style={styles.cardType}>{card.type}</Text>
                <Text style={styles.cardNumber}>Número: {card.number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#e6e6e6',
        padding: 15,
    },
    favoriteCard: {
        backgroundColor: globalColors.primary,
    },
    cardDetails: {
        width: 300,
        height: 100,
    },
    cardType: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    cardNumber: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 11,
    },
    cardBalance: {
        color: 'green',
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
    },
});
