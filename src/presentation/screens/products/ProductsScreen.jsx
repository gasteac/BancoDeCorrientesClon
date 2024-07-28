import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export const ProductsScreen = () => {
  const navigator = useNavigation();
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
    },
  ];

  return (

    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() =>
              navigator.navigate('Producto', {
                id: item.id,
                name: item.name,
                price: item.price,
              })
            }
            label={item.name}
          />
        )}
      />
    </View>
  );
};
