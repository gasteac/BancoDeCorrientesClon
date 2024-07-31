import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalColors, globalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { ProductsButton } from '../../components/shared/ProductsButton';
import { Ionicons } from '../../components/shared/Ionicons';
import { useState } from 'react';
import { BoxButtons } from '../../components/shared/BoxButtons';
import { useSelector } from 'react-redux';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const {nombre} = useSelector(state => state.login)
  
  return (
    <>
      <HamburguerMenu />
      {/* Aca me puedo mover solo entre las pantallas que definí en StackNavigator */}
      <View style={[globalStyles.container, { alignItems: 'stretch' }]}>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={[globalStyles.primaryText, { fontSize: 18 }]}>Hola, <Text style={{ color: '#00928b' }}>{nombre}.</Text></Text>
          <Pressable onPress={() => setShow(!show)}>
            <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={30} />
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate('MODO')}
          // onPress={()=>onPress()}
          style={{ backgroundColor: '#088c5e', position:'absolute', zIndex:100, borderRadius: 100, right: 20, bottom: 20, padding:12 }}>
          <Ionicons name="qr-code-outline" size={35} color="white" />
          {/* <Text style={[globalStyles.productsButtonText, { color: 'white', alignSelf: 'center', textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 40 }]}>M</Text> */}
        </Pressable>
        <ScrollView>
        <ProductsButton
          onPress={() => navigation.navigate('Cajas de Ahorro')}
          label="CAJAS DE AHORRO"
          icon={'file-tray-stacked-outline'}
          color={globalColors.principalColor}
          subText1={show ? '$ 1.726.280,50' : '***'}
          subText2={show ? 'u$s 369' : '***'}
          subText3={show ? 'Cant: 3' : '***'}
        />        
        <ProductsButton
          onPress={() => navigation.navigate('Cajas de Ahorro')}
          label="CUENTAS CORRIENTES"
          icon={'bag-outline'}
          color={globalColors.principalColor}
          subText1={show ? '$ 26.280,20' : '***'}
          subText2={show ? 'u$s 0' : '***'}
          subText3={show ? 'Cant: 1' : '***'}
        />
        <Text style={[globalStyles.primaryText, { fontSize: 18, alignSelf:'center', marginTop:10 }]}>¿Que hacemos hoy?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom:20}}>
          <BoxButtons label='Ingresar' icon='download-outline' />
          <BoxButtons label='Transferir' icon='share-outline' />
          <BoxButtons label='Prestamos' icon='cash-outline' />
          <BoxButtons label='Tu CBU' icon='id-card-outline' />
        </View>
        <ProductsButton
          onPress={() => navigation.navigate('Tus Tarjetas')}
          label="TUS TARJETAS"
          icon={'card'}
          color={globalColors.principalColor}
          subText1={show ? 'Crédito: 5' : '***'}
          subText2={show ? 'Débito: 4' : '***'}
          subText3={show ? 'Cant: 9' : '***'}
        />
          <ProductsButton
          onPress={() => navigation.navigate('Tus Tarjetas')}
          label="PLAZOS FIJOS"
          icon={'calendar-number-outline'}
          color={globalColors.principalColor}
          subText1={show ? '$ 34.340.120,50' : '***'}
          subText2={show ? 'u$s 12.550' : '***'}
          subText3={show ? 'Cant: 3' : '***'}
        />
        <ProductsButton
          onPress={() => navigation.navigate('Tus Tarjetas')}
          label="PRESTAMOS"
          icon={'cash-outline'}
          color={globalColors.principalColor}
          subText1={show ? '$ 550.280.560,20' : '***'}
          subText2={show ? 'u$s 224.560,60' : '***'}
          subText3={show ? 'Cant: 5' : '***'}
        />
      
      
        {/* <Text style={[{ marginTop: 20 }, globalStyles.primaryText]}>Tarjetas</Text> */}
       
        {/* <PrimaryButton onPress={() => navigation.navigate('Settings')} label="Settings" /> */}
        {/* <Pressable style={{position:'absolute', bottom:20, right:20}} onPress={()=> navigation.navigate('MODO')}> */}
        {/* <Pressable
          style={{ position: 'absolute', bottom: 20, right: 20 }}
          onPress={() => navigation.navigate('MODO')}
        >
          <Image
            source={require('../../assets/images/Modo.png')}
            resizeMode="contain"
            style={{ width: 60, height: 60, borderRadius: 100}}
          />
        </Pressable> */}
    </ScrollView >
      </View>
    </>
  );
};
