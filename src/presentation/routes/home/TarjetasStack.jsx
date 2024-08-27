import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreditCardsScreen } from '../../screens/products/CreditCardsScreen';
import { DebitCardsScreen } from '../../screens/products/DebitCardsScreen';
import { useEffect } from 'react';


const Tab = createMaterialTopTabNavigator();
export const TarjetasStack = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
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
            <Tab.Screen name="Tarjetas de Crédito" component={CreditCardsScreen} />
            <Tab.Screen name="Tarjetas de Débito" component={DebitCardsScreen} />
        </Tab.Navigator>

    );
}