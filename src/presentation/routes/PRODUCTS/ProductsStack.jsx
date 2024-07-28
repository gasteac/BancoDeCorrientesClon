import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';
import { AccountsTabsNavigator } from './AccountsTabNavigator';
import { CardsTabsNavigator } from './CardsTabNavigator';


// TODO Stack de pantallas de productos, que incluye, pantalla principal y productos (cuentas y tarjetas)


const Stack = createStackNavigator();

// Es como el Router de React, y los Stack.Screen son como las rutas
export const ProductsStack = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <Stack.Navigator
      initialRouteName='Portal Principal'
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
      <Stack.Screen name="Portal Principal" component={HomeScreen} />
      <Stack.Screen name="Cajas de Ahorro" component={AccountsTabsNavigator} />
      <Stack.Screen name="Tus Tarjetas" component={CardsTabsNavigator} />
      {/* // TODO TRANSFERENCIAS, PRESTAMOS, MODO,  */}
    </Stack.Navigator>
  );
};