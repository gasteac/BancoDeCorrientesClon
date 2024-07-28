import { View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { CreditCard } from '../../../components/shared/CreditCard'

export const CreditCardsScreen = () => {
    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
            </ScrollView>
        </View>
    )
}