// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { globalColors } from '../theme/theme';
// import { TopTabsNavigator } from './TopTabsNavigator';
// import { Ionicons } from '../components/shared/Ionicons';

// const Tab = createBottomTabNavigator();
// // const Tab = createMaterialBottomTabNavigator();
// //Esto es un stack completo de pantallas, solo que se maneja desde la barra inferior
// //y accedemos a este stack mediante el drawer, que también puede contener stacks diferentes
// export const BottomTabsNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName='PerfilTab'
//       sceneContainerStyle={
//         {
//           // backgroundColor:globalColors.primary
//         }
//       }
//       screenOptions={{
//         headerTitleAlign: 'center',
//         // lazy:"false",
//         // headerShown:'false',
//         // tabBarShowLabel: false,
//         tabBarInactiveTintColor: 'white',
//         tabBarActiveTintColor: globalColors.primary,
//         //Este headerStyle es el mismo que uso en StackNavigator para que los diseños sean iguales.
//         headerStyle: {
          
//           shadowColor: globalColors.principalColor,
//           // Elevation es la sombra del header
//           elevation: 30,
//           height: 60,
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontFamily: 'Poppins-SemiBold',
//         },
//         tabBarStyle: {
//           height: 60,
//           backgroundColor: globalColors.principalColor,
//         },
//         tabBarItemStyle: {
//           borderRadius: 100,
//           padding: 5,
//         },
//         tabBarIconStyle: {
//           color: 'white',
//         },
//         headerTitleStyle: {
//           fontSize: 20,
//           fontFamily: 'Poppins-SemiBold',
//           paddingTop: 5,
//         },
//       }}>
//       <Tab.Screen
//         name="PerfilTab"
//         options={{
//           title: 'Perfil',
//           tabBarIcon: ({ color }) => (
//             <Ionicons color={color} name="person-circle-outline" />
//           ),
//         }}
//         component={TopTabsNavigator}
//       />
   
   
//     </Tab.Navigator>
//   );
// };
