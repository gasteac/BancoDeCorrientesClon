import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { globalColors, globalStyles } from '../theme/theme';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '../components/shared/Ionicons';
import { LoginScreen } from '../screens/login/LoginScreen';
import { useSelector } from 'react-redux';
import { TabNavigatorMenu } from './TabNavigatorMenu';
import CustomDrawerContent from './CustomDrawerContent';

// DrawerNavigator es un contenedor de pantallas que se muestra como un menú lateral
// El Drawer puede contener a otros Stacks, como StackNavigator, o pantallas individuales

const Drawer = createDrawerNavigator();
export const SideMenuNavigator = ({ navigation, route }) => {


  const dimensions = useWindowDimensions();
  return (
    // Drawer.Navigator es el contenedor de las pantallas, y drawerContent es el contenido del menú lateral
    // drawerContent es una función que recibe props y retorna un componente (no es obligatorio, pero si quiero modificar el contenido la barra lateral si)
    <Drawer.Navigator

      initialRouteName="Mis Productos Drawer"
      // Las props que le paso a drawerContent son las props del propio Drawer.Navigator, es como que le paso toda su info al nuevo componente que voy a crear (y mostrar)
      // dsp en el componente que cree, puedo acceder a las props que le paso acá, en este caso, CustomDrawerContent
      drawerContent={props => <CustomDrawerContent {...props} />}
      // screenOptions es para personalizar el drawer
      screenOptions={{
        //que no me muestre el header (titulo con el icono hamburguesa)
        //dsp me arreglo para mostrarlo al lado de los títulos de otra forma
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#f3f3f3',
          alignItems: 'center',
          width: dimensions.width >= 735 ? '45%' : '70%',
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
          fontFamily: 'Poppins-Medium',
          paddingTop: 5
        },
        // drawerInactiveBackgroundColor: globalColors.inactive,
        drawerItemStyle: {
          borderRadius: 10,
        },

      }}>


      <Drawer.Screen
        name="Mis Productos Drawer"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
        component={TabNavigatorMenu}
        // initialParams={{ screen: 'Mis Productos' }}
       
      />

     

      <Drawer.Screen
        name="Perfil Drawer"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person" color={color} />,
        }}
        component={TabNavigatorMenu}
        // initialParams={{ screen: 'Perfil' }}
      
      />
     
      <Drawer.Screen
        name="MODO Drawer"
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
        component={TabNavigatorMenu}
      // initialParams={{ screen: 'Modo' }}
      />

      <Drawer.Screen
        name="Cerrar Sesión"
        options={{
          drawerIcon: ({ color }) => <Ionicons name="close-circle" color={color} />,
        }}
        component={LoginScreen}
        // TODO AYUDAAAA NO SE OLVIDA DE LA PANTALLA ANTERIOR. NO SE COMO HACER QUE SE OLVIDE AAAAAAH
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            })
          );
          navigation.reset('LoginScreen');
        }
        }
      />
    </Drawer.Navigator>
  );
};
// CustomDrawerContent es un componente que recibe props y retorna un componente que se muestra en el drawer
const CustomDrawerContent2 = props => {
  const navigation = useNavigation();
  const nombre = useSelector(state => state.login.nombre);

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
              fontSize: 12,
              color: 'white',
              alignSelf: 'center',
              marginBottom: 10,

              fontFamily: 'Poppins-Medium',
              paddingTop: 5
            },
          ]}>
          Última sesión: 28/05/22 17:26
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 10,
            marginBottom: 5,
            alignItems: 'center',
            alignContent: 'center',
            paddingHorizontal: 10


          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Image
              resizeMode="cover"
              source={require('../assets/images/profilePic.jpg')}
              style={{
                width: 80,
                height: 80,
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
                fontSize: 14,
                color: 'white',
                letterSpacing: 1,
                flexWrap: 'wrap',
                maxWidth: '70%',
                fontFamily: 'Poppins-Medium',
              },
            ]}>
            {nombre}
          </Text>
          {/* <Image source={require('../assets/icons/seguro.png')} resizeMode='contain' style={{ height: 25, width: 25, position: 'absolute', bottom:0, left:225 }}></Image> */}
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              bottom: -10,
              right: 0,
            }}>
            <Text style={{
              color: '#17f060', fontFamily: 'Poppins-Medium', paddingTop: 5, fontSize: 10, marginTop: -5
            }}>Dispositivo Vinculado</Text>
            <Ionicons name="phone-portrait-outline" color="#17f060" size={15} />
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

      {/* <Button
        title="SECRET SCREEN"
        style={{ backgroundColor: 'red' }}
        onPress={() => {
          navigation.navigate('Secret');
        }}
      /> */}
    </View>
  );
};