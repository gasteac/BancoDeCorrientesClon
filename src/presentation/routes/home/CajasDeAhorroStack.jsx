import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PesosAccountScreen } from '../../screens/products/PesosAccountScreen';
import { DollarsAccountScreen } from '../../screens/products/DollarsAccountScreen';
import { useEffect } from 'react';

const Tab = createMaterialTopTabNavigator();
export const CajasDeAhorroStack = ({ navigation }) => {
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
            initialRouteName='EN PESOS'
        >
            <Tab.Screen name="EN PESOS" component={PesosAccountScreen} />
            <Tab.Screen name="EN DOLARES" component={DollarsAccountScreen} />
        </Tab.Navigator>
    );
}