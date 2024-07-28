import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { globalColors, globalStyles } from '../theme/theme';
import { Button, Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '../components/shared/Ionicons';
import { ModoNavigator } from './ModoNavigator';
import { LoginScreen } from '../screens/login/LoginScreen';

// DrawerNavigator es un contenedor de pantallas que se muestra como un menú lateral
// El Drawer puede contener a otros Stacks, como StackNavigator, o pantallas individuales

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    // Drawer.Navigator es el contenedor de las pantallas, y drawerContent es el contenido del menú lateral
    // drawerContent es una función que recibe props y retorna un componente (no es obligatorio, pero si quiero modificar el contenido la barra lateral si)
    <Drawer.Navigator
      initialRouteName="Pantalla Principal"
      // Las props que le paso a drawerContent son las props del propio Drawer.Navigator, es como que le paso toda su info al nuevo componente que voy a crear (y mostrar)
      // dsp en el componente que cree, puedo acceder a las props que le paso acá, en este caso, CustomDrawerContent
      drawerContent={props => <CustomDrawerContent {...props} />}
      // screenOptions es para personalizar el drawer
      screenOptions={{
        // lazy:"false",
        //Que tan grande es la seccion desde donde puedo mover con el dedo el drawer para verlo
        swipeEdgeWidth: 80,
        //que no me muestre el header (titulo con el icono hamburguesa)
        //dsp me arreglo para mostrarlo al lado de los títulos de otra forma
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#f3f3f3',
          alignItems: 'center',
          width: dimensions.width >= 735 ? '45%' : '80%',
        },
        // drawerType es para que el drawer sea permanente o que se superponga a la pantalla
        // DEPENDE DEL ANCHO DE LA PANTALLA
        // drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerType: dimensions.width >= 735 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.principalColor,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          //   fontSize: 15,
          letterSpacing: 1,
          fontFamily: 'Roboto-Regular',
        },
        // drawerInactiveBackgroundColor: globalColors.inactive,
        drawerItemStyle: {
          borderRadius: 10,
          padding: 5,
        },
      }}>
      {/* Aca van las pantallas del drawer */}
      {/* Drawer.Screen es una pantalla del drawer */}
      {/* name es el nombre de la pantalla, y component es el componente que se va a mostrar */}
      {/* En este caso, el componente es StackNavigator, que es un contenedor de pantallas (stack) */}
      <Drawer.Screen
        name="Productos"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Perfil"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person" color={color} />,
        }}
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        name="MODO"
        options={{
          drawerIcon: () => (
            <Image
              resizeMode="cover"
              source={require('../assets/images/Modo.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
              }}
            />
          ),
        }}
        component={ModoNavigator}
      />
      <Drawer.Screen
        name="Cerrar Sesión"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="close-circle" color={color} />,
        }}
        component={LoginScreen}
      />
    </Drawer.Navigator>
  );
};
// CustomDrawerContent es un componente que recibe props y retorna un componente que se muestra en el drawer
const CustomDrawerContent = props => {
  const navigation = useNavigation();
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View
        style={{
          backgroundColor: globalColors.principalColor,
          marginBottom: 10,
          padding: 10,
        }}>
        <Text
          style={[
            globalStyles.text,
            {
              fontSize: 15,
              color: 'white',
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 5,
            },
          ]}>
          Última sesión: 28/05/22 17:26
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              resizeMode="cover"
              source={require('../assets/images/profilePic.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                shadowColor: 'black',
                borderWidth: 3,
                borderColor: '#17f060',
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              globalStyles.text,
              {
                fontSize: 15,
                color: 'white',
                marginTop: 15,
                letterSpacing: 2,
                flexWrap: 'wrap',
                textAlign: 'center',
                maxWidth: '70%',
              },
            ]}>
            GASTON EDUARDO ACOSTA (Admin)
          </Text>
          {/* <Image source={require('../assets/icons/seguro.png')} resizeMode='contain' style={{ height: 25, width: 25, position: 'absolute', bottom:0, left:225 }}></Image> */}
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              bottom: 0,
              right: 0,
            }}>
            <Text style={{ color: '#17f060' }}>Dispositivo Vinculado</Text>
            <Ionicons name="phone-portrait-outline" color="#17f060" size={20} />
          </View>
        </View>
      </View>
      {/* Parte del drawer de abajo de la foto, scrolleable */}
      {/* DrawerContentScrollView es un componente que recibe props y retorna un componente que se muestra en el drawer y se puede scrollear */}
      <DrawerContentScrollView>
        {/* Por ejemplo aca quiero que se muestre una imagen, y despues los items del drawer  */}
        {/* y aca muestro los items del drawer que ya estaban definidos en el drawer, y ahora vinieron como props, por ejemplo "Home" o "Profile"  */}
        <DrawerItemList {...props} />
        {/* Aca podría agregar otra cosa al final por ejemplo   */}
      </DrawerContentScrollView>
      <Button
        title="SECRET SCREEN"
        style={{ backgroundColor: 'red' }}
        onPress={() => {
          navigation.navigate('Secret');
        }}
      />
    </View>
  );
};
