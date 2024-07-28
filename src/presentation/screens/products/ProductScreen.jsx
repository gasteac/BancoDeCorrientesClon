import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { globalColors } from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute().params;
  const navigation = useNavigation(); //Tiene la info o puede modificar la info del header de nevgacion

  //Si quiero que el nombre del producto se muestre en el header
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={{ padding: 20, gap: 5 }}>
      <Text style={{ fontSize: 30 }}>My id is: <Text style={{ fontWeight: 'bold', color: globalColors.principalColor }}>{params.id}</Text></Text>
      <Text style={{ fontSize: 30 }}>I'm: <Text style={{ fontWeight: 'bold', color: globalColors.principalColor }}>{params.name}</Text></Text>
      <Text style={{ fontSize: 30 }}>My value is: <Text style={{ fontWeight: 'bold', color: globalColors.principalColor }}>{params.price}</Text></Text>
    </View>

  );
};
