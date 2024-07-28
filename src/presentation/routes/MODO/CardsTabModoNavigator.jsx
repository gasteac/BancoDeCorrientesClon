import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreditCardsModoScreen } from '../../screens/MODO/cards/CreditCardsModoScreen';
import { DebitCardsModoScreen } from '../../screens/MODO/cards/DebitCardsModoScreen';
const Tab = createMaterialTopTabNavigator();
export const CardsTabsModoNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-SemiBold',
                    paddingTop: 5
                },

            }}
            initialRouteName='Tarjetas de Crédito'

        >
            <Tab.Screen name="Tarjetas de Crédito" component={CreditCardsModoScreen} />
            <Tab.Screen name="Tarjetas de Débito" component={DebitCardsModoScreen} />
        </Tab.Navigator>

    );
}