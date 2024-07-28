import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CommonAccountScreen } from '../../screens/products/accounts/CommonAccountScreen';
import { SalaryAccountScreen } from '../../screens/products/accounts/SalaryAccountScreen';

const Tab = createMaterialTopTabNavigator();
export const AccountsTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-SemiBold',
                    paddingTop: 5
                },
            }}
            initialRouteName='Cuentas Corriente'
        >
            <Tab.Screen name="Cuentas Corriente" component={CommonAccountScreen} />
            <Tab.Screen name="Cuentas Sueldo" component={SalaryAccountScreen} />
        </Tab.Navigator>
    );
}