import { Image, StyleSheet, View, Switch } from 'react-native'
import { globalColors, globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react';
import { CreditCard } from '../../../components/shared/MODO/cards/CreditCard';

export const CreditCardsModoScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView>
                <CreditCard />
                <CreditCard />
                <CreditCard />
            </ScrollView>
        </View>
    )
}

