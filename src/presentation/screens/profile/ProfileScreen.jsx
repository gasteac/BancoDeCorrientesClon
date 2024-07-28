import { View, Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      //Asi me aseguro que el top no se me tape con el notch de iphone por ej
      marginTop: top + 10,
      justifyContent: 'space-between',
    }}>
      <View>
        <Text style={{
          fontSize: 25,
          alignSelf: 'center',
          marginTop: 20,
          color: 'black',
          fontWeight: 'regular'
        }}>GASTON E. ACOSTA</Text>
        <Text style={{
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 10,
          color: 'gray',
          fontWeight: 'regular'
        }}>Legajo 10281</Text>
        <Image
          resizeMode='cover'
          source={require('../../assets/images/profilePic.jpg')}
          style={{
            alignSelf: 'center',
            padding: 20,
            width: 300,
            height: 300,
            marginTop: 10,
            borderRadius: 100,
            borderWidth: 6,
            borderColor: 'white',
          }}
        />
      </View>
    </View>
  )
}