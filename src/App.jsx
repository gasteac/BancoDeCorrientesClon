import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalStack } from './presentation/routes/GlobalStack';


export const App = () => {
  return (
    <NavigationContainer>
      <GlobalStack/>
    </NavigationContainer>
  )
}