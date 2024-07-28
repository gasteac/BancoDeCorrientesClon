import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { CommonAccountScreen } from '../../screens/products/accounts/CommonAccountScreen';
import { SalaryAccountScreen } from '../../screens/products/accounts/SalaryAccountScreen';

const Tab = createMaterialTopTabNavigator();

export const AccountsTabsNavigator = () => {
    return (
        <>
        <HamburguerMenu/>
        <Tab.Navigator
        screenOptions={{
            // lazy:"false"
        }}
        initialRouteName='Principal'
        >
            <Tab.Screen name="Cuentas Corriente" component={CommonAccountScreen} />
            <Tab.Screen name="Cuentas Sueldo" component={SalaryAccountScreen} />
        </Tab.Navigator>
        </>
    );
}