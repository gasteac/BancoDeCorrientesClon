import { Image, StyleSheet, Switch, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react';
import { DebitCard } from '../../../components/shared/MODO/cards/DebitCard';

export const DebitCardsModoScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView>
                <DebitCard />
                <DebitCard />
                <DebitCard />
            </ScrollView>
        </View>
    )
}
