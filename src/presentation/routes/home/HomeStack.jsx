
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { useEffect } from 'react';
import { globalColors } from '../../theme/theme';
import { CajasDeAhorroStack } from './CajasDeAhorroStack';
import { TarjetasStack } from './TarjetasStack';
import { TransferenciasStack } from './TransferenciasStack';
import { IngresoDineroStack } from './IngresoDineroStack';
import { PrestamosStack } from './PrestamosStack';
import { CuentasCorrientesStack } from './CuentasCorrientesStack';
import { PlazosFijosStack } from './PlazosFijosStack';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


// TODO Stack de pantallas de productos, que incluye, pantalla principal y productos (cuentas y tarjetas) TRANSFERENCIAS PRESTAMOS TODA LA WEA

const Stack = createStackNavigator();

// Es como el Router de React, y los Stack.Screen son como las rutas
export const HomeStack = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  //TODO ESTO DE ACA, para que el tab navigator desaparezca cuando no estoy en la pantalla principal (o las que yo elija)

  useLayoutEffect(() => {

      //TODO esto necesario para que no aparezca el tab navigator en ciertas pantallas
    let routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === undefined) { routeName = 'Portal Principal' }
    console.log(routeName)
    //Aca pongo las pantallas principales de un stack de mi tab donde SI quiero que aparezca el tab navigator
    if (routeName != 'Portal Principal'
      && routeName != 'cajasDeAhorroStack'
      // && routeName != 'tarjetasStack'
      // && routeName != 'TransferenciasStack'
      // && routeName != 'IngresoDineroStack'
      // && routeName != 'prestamosStack'
      && routeName != 'cuentasCorrientesStack'
      // && routeName != 'plazosFijosStack'
      && routeName != 'Mis Productos'
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
    <Stack.Navigator
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
      <Stack.Screen name="cajasDeAhorroStack" options={{ title: 'Cajas de Ahorro'}} component={CajasDeAhorroStack} />
      <Stack.Screen name="tarjetasStack" options={{ title: 'Tarjetas' }} component={TarjetasStack} />
      <Stack.Screen name="TransferenciasStack" options={{ title: 'Transferencias' }} component={TransferenciasStack} />
      <Stack.Screen name="IngresoDineroStack" options={{ title: 'Ingresar dinero' }} component={IngresoDineroStack} />
      <Stack.Screen name="prestamosStack" options={{ title: 'Prestamos' }} component={PrestamosStack} />
      <Stack.Screen name="cuentasCorrientesStack" options={{ title: 'Cuentas Corrientes' }} component={CuentasCorrientesStack} />
      <Stack.Screen name="plazosFijosStack" options={{ title: 'Plazos Fijos' }} component={PlazosFijosStack} />

      {/* // TODO TRANSFERENCIAS, PRESTAMOS, MODO,  */}
    </Stack.Navigator>
  );
};