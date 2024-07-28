import { Text, Pressable, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { Ionicons } from './Ionicons';

export const ProductsButton = ({ onPress, label, icon, color, subText1 = '', subText2 = '', subText3 = '' }) => {
  return (
    <Pressable
      onPress={onPress}
      // onPress={()=>onPress()}
      style={globalStyles.productsButton}>
      <Ionicons name={icon} size={70} color={color} />
      <View style={{ justifyContent: 'center' }}>
        <Text style={[globalStyles.productsButtonText]}>{label}</Text>
        <Text style={[globalStyles.productsButtonSubText]}>{subText1}</Text>
        <Text style={[globalStyles.productsButtonSubText]}>{subText2}</Text>
      </View>
      <Text style={[globalStyles.productsButtonSubText, { position: 'absolute', right: 10, bottom: 5 }]}>{subText3}</Text>
    </Pressable>
  );
};
