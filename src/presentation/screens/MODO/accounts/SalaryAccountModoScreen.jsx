import { Image, StyleSheet, Switch, View } from 'react-native'
import { globalColors, globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react';
import { SalaryAccount } from '../../../components/shared/MODO/accounts/SalaryAccount';

export const SalaryAccountModoScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView
            >
                <SalaryAccount />
                <SalaryAccount />
                <SalaryAccount />
            </ScrollView>
        </View>
    )
}
