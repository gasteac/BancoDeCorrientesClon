import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';
import { IngresoDineroScreen } from '../../screens/products/IngresoDineroScreen';
import { PlazosFijosScreen } from '../../screens/products/PlazosFijosScreen';

const Stack = createStackNavigator();
export const PlazosFijosStack = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <Stack.Navigator
            initialRouteName='Plazos Fijos'
            screenOptions={{
                lazy: "true",
                headerStyle: {
                    shadowColor: globalColors.principalColor,
                    elevation: 30,
                    height: 60,
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'Poppins-SemiBold',
                    paddingTop: 5
                },
            }}
        >
            <Stack.Screen name="Plazos Fijos" component={PlazosFijosScreen} />
        </Stack.Navigator>
    );
};