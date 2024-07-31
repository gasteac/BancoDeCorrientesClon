import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';
import { IngresoDineroScreen } from '../../screens/products/IngresoDineroScreen';

const Stack = createStackNavigator();
export const IngresoDineroStack = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <Stack.Navigator
            initialRouteName='Ingreso de dinero'
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
            <Stack.Screen name="Ingreso de dinero" component={IngresoDineroScreen} />
        </Stack.Navigator>
    );
};