import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PesosAccountScreen } from '../../screens/products/accounts/PesosAccountScreen';
import { DollarsAccountScreen } from '../../screens/products/accounts/DollarsAccountScreen';

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
            initialRouteName='EN PESOS'
        >
            <Tab.Screen name="EN PESOS" component={PesosAccountScreen} />
            <Tab.Screen name="EN DOLARES" component={DollarsAccountScreen} />
        </Tab.Navigator>
    );
}