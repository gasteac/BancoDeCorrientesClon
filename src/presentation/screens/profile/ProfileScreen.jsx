import { View, Text, Image, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { Ionicons } from '../../components/shared/Ionicons';
import { useSelector } from 'react-redux';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const nombre = useSelector(state => state.login.nombre)
  return (
    <>
      <HamburguerMenu />
      <View style={{ marginTop: 20 }}>
        <Image
          resizeMode='cover'
          source={require('../../assets/images/profilePic.jpg')}
          style={{
            alignSelf: 'center',
            width: 150,
            height: 150,
            marginTop: 1,
            borderRadius: 50,
            borderWidth: 5,
            borderColor: globalColors.principalColor,
          }}
        />
        <View style={{ position: 'absolute', bottom: 62, right: 75 }}>
          <Ionicons name='create-outline' />
        </View>
        <Text style={{
          fontSize: 25,
          alignSelf: 'center',
          marginTop: 20,
          color: 'black',
          fontFamily: 'Poppins-SemiBold'
        }}>{nombre}</Text>

      </View>
      <ScrollView style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        //Asi me aseguro que el top no se me tape con el notch de iphone por ej
        marginTop: top + 10,
      }}>

        <View style={{ marginBottom: 2, marginTop: 10 }}>
          <Text style={{
            fontSize: 15,
            marginTop: 1,
            color: 'gray',
            fontFamily: 'Poppins-SemiBold'
          }}>CUIL</Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            fontFamily: 'Poppins-SemiBold'
          }}>21-3699631726-6</Text>
        </View>

        <View style={{ marginBottom: 2 }}>
          <Text style={{
            fontSize: 15,
            marginTop: 1,
            color: 'gray',
            fontFamily: 'Poppins-SemiBold'
          }}>Fecha de nacimiento</Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            fontFamily: 'Poppins-SemiBold'
          }}>12-Noviembre-1933</Text>
        </View>

        <View style={{ marginBottom: 2 }}>
          <Text style={{
            fontSize: 15,
            marginTop: 1,
            color: 'gray',
            fontFamily: 'Poppins-SemiBold'
          }}>País</Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            fontFamily: 'Poppins-SemiBold'
          }}>Argentina</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginBottom: 2 }}>
            <Text style={{
              fontSize: 15,
              marginTop: 1,
              color: 'gray',
              fontFamily: 'Poppins-SemiBold'
            }}>Provincia</Text>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold'
            }}>Buenos Aires</Text>
          </View>
          <View style={{ marginBottom: 2 }}>
            <Text style={{
              fontSize: 15,
              marginTop: 1,
              color: 'gray',
              fontFamily: 'Poppins-SemiBold'
            }}>Código postal</Text>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              alignSelf: 'flex-end'
            }}>4300</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ marginBottom: 2 }}>
            <Text style={{
              fontSize: 15,
              marginTop: 1,
              color: 'gray',
              fontFamily: 'Poppins-SemiBold'
            }}>Calle</Text>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold'
            }}>Balboa</Text>
          </View>
          <View style={{ marginBottom: 2 }}>
            <Text style={{
              fontSize: 15,
              marginTop: 1,
              color: 'gray',
              fontFamily: 'Poppins-SemiBold'
            }}>Numero</Text>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              alignSelf: 'flex-end'
            }}>878</Text>
          </View>
        </View>

        <View style={{ marginBottom: 2 }}>
          <Text style={{
            fontSize: 15,
            marginTop: 1,
            color: 'gray',
            fontFamily: 'Poppins-SemiBold'
          }}>Teléfono</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              paddingTop: 3
            }}>+543795132130</Text>
            <Ionicons name='create-outline' size={22} />
          </View>
        </View>
        <View style={{ marginBottom: 2 }}>
          <Text style={{
            fontSize: 15,
            marginTop: 1,
            color: 'gray',
            fontFamily: 'Poppins-SemiBold'
          }}>Correo electrónico</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              paddingTop: 3
            }}>gastonacosta@banko.com.ar</Text>
            <Ionicons name='create-outline' size={22} />
          </View>
        </View>
      </ScrollView>
    </>
  )
}






