import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CuentasCorrientesScreen } from '../../screens/products/CuentasCorrientesScreen';

const Tab = createMaterialTopTabNavigator();
export const CuentasCorrientesStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-SemiBold',
                    paddingTop: 5
                },
            }}
            initialRouteName='Cuentas Corrientes'
        >
            <Tab.Screen name="Cuentas Corrientes" component={CuentasCorrientesScreen} />
        </Tab.Navigator>
    );
}