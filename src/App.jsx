import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalStack} from './presentation/routes/GlobalStack';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalStack />
      </NavigationContainer>
    </Provider>
  );
};
