import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { globalColors } from '../theme/theme';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SecretScreen } from '../screens/secretScreen/SecretScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProductsTabsNavigator } from './cuentasTarjetas/ProductsTabNavigator';

// Creamos un stack, que es una pila de pantallas
const Stack = createStackNavigator();

// Es como el Router de React, y los Stack.Screen son como las rutas
export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    // Stack.Navigator es el contenedor de las pantallas
    <Stack.Navigator
      screenOptions={{
        // lazy:"false",
        headerStyle: {
          shadowColor: globalColors.principalColor,
          // Elevation es la sombra del header
          elevation: 30,
          height: 60,
        },
        // headerTintColor es el color del texto del header
        headerTitleAlign: 'center',
        // headerTitleStyle es para personalizar el texto del header
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Poppins-SemiBold',
          paddingTop: 5
        },
      }}
    >
      {/* Stack.Screen es una pantalla del stack */}
      {/* Puedo personalizar individualmente cada header con options ={{}}, osea lo que hice en Stack.Navigator pero individual para cada pantalla */}
      {/* Por ej puedo cambiar el color del header de la pantalla Home */}
      {/* Esto es un stack completo, Banquito es la pantalla principal */}
      {/* Solo me puedo mover desde las pantallas que esten aca entre las pantallas que estan aca */}
      <Stack.Screen options={{ headerShown: false, swipeEnabled: 'false' }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false, swipeEnabled: 'false' }} name="Pagina Principal" component={ProductsTabsNavigator} />
      <Stack.Screen name="Mis productos" component={HomeScreen} />
      <Stack.Screen name="Productos2" component={ProductsScreen} />
      <Stack.Screen name="Producto" component={ProductScreen} />
      <Stack.Screen name="Secret" component={SecretScreen} />

    </Stack.Navigator>
  );
};