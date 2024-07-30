import { View, Switch, Image, StyleSheet, Text } from 'react-native'
import { globalColors } from '../../../theme/theme'

export const Account = ({ account, isFavorite, onFavoriteSelect, showMode=false }) => {
    return (
        <View style={styles.accountContainer}>
            {!showMode && (
                 <Switch
                style={{ position: 'absolute', alignSelf: 'center', bottom: '40%', right: 10, zIndex: 40 }}
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isFavorite ? '#01d837' : '#f4f3f4'}
                onValueChange={onFavoriteSelect}
                value={isFavorite}
            />
            )}
            <View style={[styles.cuentas, isFavorite && styles.favoriteAccount]}>
                <Text style={styles.textoCuentas}>{account.type}</Text>
                <Text style={styles.cbuTextoCuentas}>CBU: {account.cbu}</Text>
                <Text style={styles.moneyTextoCuentas}>{account.balance}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    accountContainer: {
        marginBottom: 10,
    },
    favoriteAccount: {
        backgroundColor: globalColors.primary,
    },
    cuentas: {
        width: 300,
        height: 100,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#e6e6e6',
    },
    textoCuentas: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    cbuTextoCuentas: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontSize: 11,
    },
    moneyTextoCuentas: {
        color: 'green',
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
    },
});