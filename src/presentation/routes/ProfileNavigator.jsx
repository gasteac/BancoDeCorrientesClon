import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../theme/theme';
import { useCallback, useEffect } from 'react';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { useFocusEffect } from '@react-navigation/native';

// Creamos un stack, que es una pila de pantallas
const Stack = createStackNavigator();
// Es como el Router de React, y los Stack.Screen son como las rutas
export const ProfileNavigator = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    // Stack.Navigator es el contenedor de las pantallas
    <Stack.Navigator
      // screenOptions es para personalizar el header
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
      {/* Esto es un stack completo, MODO es la pantalla principal */}
      {/* Solo me puedo mover desde las pantallas que esten aca entre las pantallas que estan aca */}
      <Stack.Screen name="Datos Personales" component={ProfileScreen} />
    </Stack.Navigator>
  );
};