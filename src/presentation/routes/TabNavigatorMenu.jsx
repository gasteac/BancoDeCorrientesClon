import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Ionicons } from '../components/shared/Ionicons';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProfileNavigator } from './ProfileNavigator';
import { HomeStack } from './home/HomeStack';
import { useDispatch } from 'react-redux';
import { setActiveScreen } from '../../../redux/actions/navigationActions';
import { ModoNavigator } from './MODO/ModoNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigatorMenu = () => {

const dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName="Mis Productos"
      
    >
      <Tab.Screen
        name="Mis Productos"
        component={HomeStack}
        listeners={() => ({
          focus: () => dispatch(setActiveScreen('Mis Productos')),
        })}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="MODO"
        component={ModoNavigator}
        listeners={() => ({
          focus: () => dispatch(setActiveScreen('MODO')),
        })}
        options={{
          tabBarIcon: ({ color }) => <Image
            resizeMode="cover"
            source={require('../assets/images/Modo.png')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
            }}
          />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileNavigator}
        listeners={() => ({
          focus: () => dispatch(setActiveScreen('Perfil')),
        })}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" color={color} />,
        }}

      />
    
    
    </Tab.Navigator>
  );
};