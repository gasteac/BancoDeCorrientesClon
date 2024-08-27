import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../../theme/theme';
import { ModoScreen } from '../../screens/MODO/ModoScreen';
import { CardsTabsModoNavigator } from './CardsTabModoNavigator';
import { AccountModoScreen } from '../../screens/MODO/accounts/AccountModoScreen';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// Creamos un stack, que es una pila de pantallas
const Stack = createStackNavigator();
// Es como el Router de React, y los Stack.Screen son como las rutas
export const ModoNavigator = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  //TODO ESTO DE ACA, para que el tab navigator desaparezca cuando no estoy en la pantalla principal (o las que yo elija)

  useLayoutEffect(() => {

    //TODO esto necesario para que no aparezca el tab navigator en ciertas pantallas
    let routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === undefined) { routeName = 'Modo' }
    console.log(routeName)
    //Aca pongo las pantallas principales de un stack de mi tab donde SI quiero que aparezca el tab navigator
    if (routeName != 'Modo'
      // && routeName != 'Cuenta Favorita MODO'
      // && routeName != 'Tarjetas Favoritas MODO'
    ) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
      navigation.getParent()?.setOptions({ headerShown: false });
      navigation.getParent()?.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: 'flex' }
      });
      navigation.setOptions({
        headerShown: false
      })
      // navigation.getParent()?.setOptions({ headerShown: false });
      // navigation.getParent()?.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

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
      <Stack.Screen name="Modo" component={ModoScreen} />
      <Stack.Screen name="Cuenta Favorita MODO" component={AccountModoScreen} />
      <Stack.Screen name="Tarjetas Favoritas MODO" component={CardsTabsModoNavigator} />
    </Stack.Navigator>
  );
};