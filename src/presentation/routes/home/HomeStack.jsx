import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';
import { CajasDeAhorroStack } from './CajasDeAhorroStack';
import { TarjetasStack } from './TarjetasStack';
import { TransferenciasStack } from './TransferenciasStack';
import { IngresoDineroStack } from './IngresoDineroStack';
import { PrestamosStack } from './PrestamosStack';
import { CuentasCorrientesStack } from './CuentasCorrientesStack';
import { PlazosFijosStack } from './PlazosFijosStack';



// TODO Stack de pantallas de productos, que incluye, pantalla principal y productos (cuentas y tarjetas) TRANSFERENCIAS PRESTAMOS TODA LA WEA


const Stack = createStackNavigator();

// Es como el Router de React, y los Stack.Screen son como las rutas
export const HomeStack = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
      <Stack.Screen name="cajasDeAhorroStack" options={{ title: 'Cajas de Ahorro' }} component={CajasDeAhorroStack} />
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