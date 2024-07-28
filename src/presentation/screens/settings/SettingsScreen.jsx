import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'
import { HamburguerMenu } from '../../components/shared/HamburguerMenu'

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <HamburguerMenu/>
    <View style={[globalStyles.container, {justifyContent:'space-between'}]}>
        <Text style={{ fontSize: 20, marginBottom:10 }}>Configuración</Text>

      <PrimaryButton 
      label="Volver" 
      // Opción de ir a la pantalla anterior
      onPress={()=>navigation.goBack()}
      />
      {/* <PrimaryButton
        label="Home"
        // "Disparo" la opción de ir a la pantalla de inicio (Top) de mi StackNavigator (Banquito)
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      /> */}

    </View>
    </>
  )
}



