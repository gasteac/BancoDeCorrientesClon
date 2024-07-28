
import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const AccountsScreen = () => {

  return (
    <>
      <HamburguerMenu />
      <View style={globalStyles.container}>
        <Text style={{ fontSize: 20 }}>Seleccione su cuenta</Text>
      </View>
    </>
  )
}