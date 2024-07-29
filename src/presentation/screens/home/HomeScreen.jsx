import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalColors, globalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { ProductsButton } from '../../components/shared/ProductsButton';
import { Ionicons } from '../../components/shared/Ionicons';
import { useState } from 'react';
import { BoxButtons } from '../../components/shared/BoxButtons';
import { useSelector } from 'react-redux';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { CameraPermission } from 'react-native-vision-camera';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const nombre = useSelector(state => state.login.nombre)

  // useEffect(() => {
  //   console.log('me muestro / no me muestro :)');
  // }, [show]);

  // useEffect(() => {
  //   requestCameraPermission();
  // }, []); 

  // const requestCameraPermission = async () => {
  //   const permission = await CameraPermission.request();
  //   setCameraPermission(permission);
  //   if (permission === 'denied') {
  //     // Aquí puedes mostrar un mensaje al usuario indicando que no se puede usar la cámara
  //     console.warn('Camera permission denied');
  //   } else if (permission === 'authorized') {
  //     // Aquí puedes iniciar la funcionalidad de la cámara
  //     console.log('Camera permission authorized');
  //   }
  // }

  // const { devices, isLoading } = useCameraDevices('wide-angle-camera');
  // const device = devices?.back;

  // const camarita = () =>{
  //   if (isLoading) return <LoadingView />; 
  //   if (device == null) return <Text>No suitable camera device found</Text>; 
  //   if (cameraPermission !== 'authorized') {
  //     return <Text>Camera permission not granted</Text>; // o puedes redireccionar a settings
  //   }
  //   return (
  //     <Camera
  //       style={StyleSheet.absoluteFill}
  //       device={device}
  //       isActive={true}
  //       onError={(error) => console.error('Camera error:', error)}
  //     />
  //   );
  // }

  return (
    <>
      <HamburguerMenu />
      {/* Aca me puedo mover solo entre las pantallas que definí en StackNavigator */}
      <View style={[globalStyles.container, { alignItems: 'stretch' }]}>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={[globalStyles.primaryText, { fontSize: 15 }]}>Hola, <Text style={{ color: '#00928b' }}>{nombre}</Text></Text>
          <Pressable onPress={() => setShow(!show)}>
            <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={30} />
          </Pressable>
        </View>
        <ProductsButton
          onPress={() => navigation.navigate('Cajas de Ahorro')}
          label="CAJAS DE AHORRO"
          icon={'bag-outline'}
          color={globalColors.principalColor}
          subText1={show ? '$ 1.726.280,50' : '***'}
          subText2={show ? 'u$s 369' : '***'}
          subText3={show ? 'Cantidad: 3' : '***'}
        />
        <ProductsButton
          onPress={() => navigation.navigate('Tus Tarjetas')}
          label="TUS TARJETAS"
          icon={'card'}
          color={globalColors.principalColor}
          subText1={show ? 'Crédito: 5' : '***'}
          subText2={show ? 'Débito: 4' : '***'}
          subText3={show ? 'Cantidad: 9' : '***'}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop:10 }}>
          <BoxButtons label='Ingresar' icon='download-outline' />
          <BoxButtons label='Transferir' icon='share-outline' />
          <BoxButtons label='Prestamos' icon='cash-outline' />
          <BoxButtons label='Tu CVU' icon='id-card-outline' />
        </View>
        {/* <Text style={[{ marginTop: 20 }, globalStyles.primaryText]}>Tarjetas</Text> */}
       
        {/* <PrimaryButton onPress={() => navigation.navigate('Settings')} label="Settings" /> */}
        {/* <Pressable style={{position:'absolute', bottom:20, right:20}} onPress={()=> navigation.navigate('MODO')}> */}
        <Pressable
          style={{ position: 'absolute', bottom: 20, right: 20 }}
          onPress={() => navigation.navigate('MODO')}
        >
          <Image
            source={require('../../assets/images/Modo.png')}
            resizeMode="contain"
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        </Pressable>
      </View>
    </>
  );
};
