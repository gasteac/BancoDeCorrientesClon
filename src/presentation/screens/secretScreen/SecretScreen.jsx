import { View, Image, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

export const SecretScreen = () => {
  return (
    <View style={[globalStyles.container, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={{ fontSize: 15, marginBottom: 10, color:'black' }}>You have found the secret cat..</Text>
      <Image style={{
        width: 300,
        height: 300,
        borderColor: 'gray',
        borderWidth: 5,
        borderRadius: 50
      }} source={require('../../assets/images/gatito.jpg')}></Image>
    </View>
  );
};