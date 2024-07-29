import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../../theme/theme';
import { ModoScreen } from '../../screens/MODO/ModoScreen';
import { AccountsTabsModoNavigator } from './AccountsTabModoNavigator';
import { CardsTabsModoNavigator } from './CardsTabModoNavigator';
// Creamos un stack, que es una pila de pantallas
const Stack = createStackNavigator();
// Es como el Router de React, y los Stack.Screen son como las rutas
export const ModoNavigator = () => {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // }, [])

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
      <Stack.Screen name="Cuenta Favorita MODO" component={AccountsTabsModoNavigator} />
      <Stack.Screen name="Tarjetas Favoritas Modo" component={CardsTabsModoNavigator} />
    </Stack.Navigator>
  );
};