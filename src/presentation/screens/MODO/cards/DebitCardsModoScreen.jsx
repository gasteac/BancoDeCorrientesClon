import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { globalStyles } from '../../../theme/theme';
import { Card } from '../../../components/shared/MODO/Card';

export const DebitCardsModoScreen = () => {
    const [favoriteCards, setFavoriteCards] = useState([]);

    const cards = [
        { id: 1, type: 'Debito, no se q poner', number: '**** **** **** 1234', balance: '$5,657.54' },
        { id: 2, type: 'Debito, no se q poner', number: '**** **** **** 5678', balance: '$67,853.43' },
        { id: 3, type: 'Debito, no se q poner', number: '**** **** **** 9101', balance: '$244,567.23' },
        { id: 4, type: 'Debito, no se q poner', number: '**** **** **** 1213', balance: '$44,567.23' },
        { id: 5, type: 'Debito, no se q poner', number: '**** **** **** 1415', balance: '$94,567.23' },
        { id: 6, type: 'Debito, no se q poner', number: '**** **** **** 1617', balance: '$12,567.23' },
        { id: 7, type: 'Debito, no se q poner', number: '**** **** **** 1819', balance: '$67,567.23' },
        { id: 8, type: 'Debito, no se q poner', number: '**** **** **** 2021', balance: '$455,567.23' },
    ];

    const handleFavoriteToggle = (card) => {
        setFavoriteCards(prevFavorites => {
            if (prevFavorites.some(fav => fav.id === card.id)) {
                return prevFavorites.filter(fav => fav.id !== card.id); // Remover de favoritos
            } else {
                return [...prevFavorites, card]; // Agregar a favoritos
            }
        });
    };

    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <Text style={{ fontSize: 15, color: 'black', marginBottom: 20, alignSelf: 'center', textAlign: 'center' }}>
                Selecciona tus tarjetas de débito favoritas
            </Text>
            <ScrollView>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        isFavorite={favoriteCards.some(fav => fav.id === card.id)}
                        onFavoriteSelect={() => handleFavoriteToggle(card)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};
