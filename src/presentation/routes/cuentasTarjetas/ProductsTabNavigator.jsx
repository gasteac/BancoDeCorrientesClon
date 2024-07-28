import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { globalColors } from '../../theme/theme';
import { Ionicons } from '../../components/shared/Ionicons';
import { CardsTabsNavigator } from './CardsTabNavigator';
import { AccountsTabsNavigator } from './AccountsTabNavigator';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
//Esto es un stack completo de pantallas, solo que se maneja desde la barra inferior
//y accedemos a este stack mediante el drawer, que también puede contener stacks diferentes
export const ProductsTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='CuentasTabs'
      
      sceneContainerStyle={
        {
          // backgroundColor:globalColors.primary
        }
      }
      screenOptions={{
        headerTitleAlign: 'center',
        // lazy:"false",
        // headerShown:'false',
        // tabBarShowLabel: false,
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: globalColors.primary,
        //Este headerStyle es el mismo que uso en StackNavigator para que los diseños sean iguales.
        headerStyle: {
          shadowColor: globalColors.principalColor,
          // Elevation es la sombra del header
          elevation: 30,
          height: 60,
          
        },
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Poppins-SemiBold',
          paddingTop: 5
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-SemiBold',
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: globalColors.principalColor,
        },
        tabBarItemStyle: {
          borderRadius: 100,
          padding: 5,
        },
        tabBarIconStyle: {
          color: 'white',
        },
      }}>
      <Tab.Screen
        name="TarjetasTab"
        options={{
          headerTitle: 'Tarjetas',
          title: 'Tarjetas',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="card-outline" />
          ),
        }}
        component={CardsTabsNavigator}
      />
      <Tab.Screen

        name="CuentasTab"
        options={{
          headerTitle: 'Cajas de Ahorro',
          title: 'Cuentas',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="file-tray-full-outline" />
          ),
        }}
        component={AccountsTabsNavigator}
      />
    </Tab.Navigator>
  );
};
