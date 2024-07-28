import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from './Ionicons';

export const HamburguerMenu = () => {
  // Hook de navegación, contiene la información de la navegación actual, como la ruta actual y las acciones de navegación
  const navigation = useNavigation();
  // useEffect es un hook que se ejecuta después de que la renderización se haya completado, o sea, después de que el componente se haya montado
  useEffect(() => {
    // setOptions es una función que me permite modificar las opciones de navegación, por ejemplo el header, el título, etc
    navigation.setOptions({
      // headerLeft es el componente que se muestra a la izquierda del header
      headerLeft: () => (
        <Pressable
          // onPress es la función que se ejecuta cuando se presiona el componente
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ marginLeft: 10 }}
        >
          <Ionicons name="menu-outline" />
        </Pressable>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Pagina Principal')}>
          <Image
            source={require('../../assets/images/BCO2.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
};
