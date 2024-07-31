import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';
import { IngresoDineroScreen } from '../../screens/products/IngresoDineroScreen';
import { PrestamosScreen } from '../../screens/products/PrestamosScreen';

const Stack = createStackNavigator();
export const PrestamosStack = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <Stack.Navigator
            initialRouteName='Prestamos'
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
            <Stack.Screen name="Prestamos" component={PrestamosScreen} />
        </Stack.Navigator>
    );
};