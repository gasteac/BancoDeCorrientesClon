import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../../theme/theme';
import { PrestamosScreen } from '../../screens/products/PrestamosScreen';
import { useEffect } from 'react';

const Stack = createStackNavigator();
export const PrestamosStack = ({ navigation }) => {
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