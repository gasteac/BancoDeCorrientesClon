import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { CreditCardsScreen } from '../../screens/products/cards/CreditCardsScreen';
import { DebitCardsScreen } from '../../screens/products/cards/DebitCardsScreen';

const Tab = createMaterialTopTabNavigator();

export const CardsTabsNavigator = () => {
    return (
        <>
        <HamburguerMenu/>
        <Tab.Navigator
        screenOptions={{
            // lazy:"false"
        }}
        initialRouteName='Principal'
        >
            <Tab.Screen name="Tarjetas de Credito" component={CreditCardsScreen} />
            <Tab.Screen name="Tarjetas de Debito" component={DebitCardsScreen} />
        </Tab.Navigator>
        </>
    );
}