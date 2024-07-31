import { Text, Pressable, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { Ionicons } from './Ionicons';

export const ProductsButton = ({ onPress, label, icon, color, subText1 = '', subText2 = '', subText3 = '' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.productsButton}>
      <Ionicons name={icon} size={50} color={color} />
      <View>
        <Text style={[globalStyles.productsButtonText]}>{label}</Text>
          <Text style={[globalStyles.productsButtonSubText]}>{subText1}</Text>
          <Text style={[globalStyles.productsButtonSubText]}>{subText2}</Text>
      </View>
      <Text style={[globalStyles.productsButtonSubText, { position: 'absolute', right: 10, top: 5, fontFamily:'Poppins-SemiBold', fontSize:13, color:'gray' }]}>{subText3}</Text>
    </Pressable>
  );
};
