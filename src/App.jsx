import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes';


export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator/>
    </NavigationContainer>
  )
}