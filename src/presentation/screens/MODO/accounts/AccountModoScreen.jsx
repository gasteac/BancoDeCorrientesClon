import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { Account } from '../../../components/shared/MODO/Account';
import { useState } from 'react';

export const AccountModoScreen = () => {
    const [favoriteAccount, setFavoriteAccount] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const accounts = [
        { id: 1, type: 'Caja de ahorro', cbu: '49354748574854', balance: '$5.657,54' },
        { id: 2, type: 'Caja de ahorro', cbu: '24545345445332', balance: '$67.853,43' },
        { id: 3, type: 'Caja de ahorro', cbu: '76564543543543', balance: '$244.567,23' },
        { id: 4, type: 'Caja de ahorro', cbu: '32324345356466', balance: '$44.567,23' },
        { id: 5, type: 'Caja de ahorro', cbu: '21257675645344', balance: '$94.567,23' },
        { id: 6, type: 'Caja de ahorro', cbu: '12154657566455', balance: '$12.567,23' },
        { id: 7, type: 'Caja de ahorro', cbu: '34355675876654', balance: '$67.567,23' },
        { id: 8, type: 'Caja de ahorro', cbu: '97877664554434', balance: '$455.567,23' },


    ];

    const handleFavoriteSelect = (account) => {
        setFavoriteAccount(account);
        setShowModal(true);
    };

    const handleConfirmChange = () => {
        setShowModal(false);
    };

    const handleCancelChange = () => {
        setShowModal(false);
        setFavoriteAccount(null);
    };

    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <Text style={{ fontSize: 15, color: 'black', marginBottom: 20, alignSelf: 'center', textAlign: 'center' }}>
                Recibe el dinero que te envíen por MODO
            </Text>
            {favoriteAccount ? (
                <>
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 10 }}>
                        Tu cuenta favorita actual es
                    </Text>
                    <Account
                        account={favoriteAccount}
                        isFavorite={true}
                        onFavoriteSelect={() => setFavoriteAccount(null)}
                    />
                    {/* <View style={{ height: 3, width: '80%', backgroundColor: globalColors.primary, borderRadius:100 }} /> */}
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 20, alignSelf: 'center', textAlign: 'center' }}>
                        Selecciona otra cuenta como favorita
                    </Text>
                </>
            ) : (
                <Text style={{ fontSize: 17, color: 'black', marginBottom: 10 }}>Selecciona una cuenta como favorita</Text>
            )}
            <ScrollView>
                {accounts
                    .filter(account => account.id !== favoriteAccount?.id)
                    .map((account) => (
                        <Account
                            key={account.id}
                            account={account}
                            isFavorite={favoriteAccount?.id === account.id}
                            onFavoriteSelect={() => handleFavoriteSelect(account)}
                        />
                    ))}
            </ScrollView>
            <Modal visible={showModal} animationType="fade" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black', marginBottom: 20, fontFamily: 'Poppins-Regular' }}>Seleccionar esta cuenta como favorita?</Text>
                        <TouchableOpacity onPress={handleConfirmChange} style={{ justifyContent: 'center', backgroundColor: globalColors.primary, padding: 10, borderRadius: 10, marginBottom: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular', color: 'black' }}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCancelChange} style={{ justifyContent: 'center', backgroundColor: globalColors.primaryDarker, padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular', color: 'black' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};