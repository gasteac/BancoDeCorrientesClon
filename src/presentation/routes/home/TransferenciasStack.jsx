import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../../theme/theme';
import { TransfersScreen } from '../../screens/products/TransfersScreen';
import { useEffect } from 'react';

const Stack = createStackNavigator();
export const TransferenciasStack = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <Stack.Navigator
            initialRouteName='Transferir dinero'
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
            <Stack.Screen name="Transferir dinero" component={TransfersScreen} />
        </Stack.Navigator>
    );
};