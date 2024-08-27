import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../../theme/theme';
import { PlazosFijosScreen } from '../../screens/products/PlazosFijosScreen';
import { useEffect } from 'react';

const Stack = createStackNavigator();
export const PlazosFijosStack = ({navigation}) => {
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