import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalStack} from './presentation/routes/GlobalStack';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { globalColors } from './presentation/theme/theme';
export const App = () => {
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ marginTop: 40, backgroundColor: 'white', borderColor: 'white', width:'60%'}}
        text1Style={{
          fontSize: 15,
          color:'green',
          textAlign:'center',
          alignSelf:'center',
        }}
      />
    ),
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalStack />
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </Provider>
  );
};

