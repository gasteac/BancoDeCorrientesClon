import { Image, StyleSheet, Switch, View } from 'react-native'
import { globalColors, globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react';
import { CommonAccount } from '../../../components/shared/MODO/accounts/CommonAccount';

export const CommonAccountModoScreen = () => {
    return (
        <View style={[globalStyles.container, { paddingBottom: 0 }]}>
            <ScrollView
            >
                <CommonAccount />
                <CommonAccount />
                <CommonAccount />
            </ScrollView>
        </View>
    )
}
