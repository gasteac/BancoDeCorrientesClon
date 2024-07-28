import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { CreditCardsScreen } from '../../screens/products/cards/CreditCardsScreen';
import { DebitCardsScreen } from '../../screens/products/cards/DebitCardsScreen';

const Tab = createMaterialTopTabNavigator();

export const CardsTabsNavigator = () => {
    return (
        <>
            <HamburguerMenu />
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontFamily: 'Poppins-SemiBold',
                        paddingTop: 5
                    },
                    
                }}

                initialRouteName='Principal'
            >
                <Tab.Screen name="Tarjetas de Crédito" component={CreditCardsScreen} />
                <Tab.Screen name="Tarjetas de Débito" component={DebitCardsScreen} />
            </Tab.Navigator>
        </>
    );
}