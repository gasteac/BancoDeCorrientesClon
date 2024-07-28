import { View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { ScrollView } from 'react-native-gesture-handler'
import { DebitCard } from '../../../components/shared/DebitCard'

export const DebitCardsScreen = () => {
    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <DebitCard />
                <DebitCard />
                <DebitCard />
                <DebitCard />
            </ScrollView>
        </View>
    )
}