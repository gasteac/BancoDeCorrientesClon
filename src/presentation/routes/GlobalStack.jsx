import { createStackNavigator } from '@react-navigation/stack';
import { SideMenuNavigator } from './SideMenuNavigator';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { ProfileNavigator } from './ProfileNavigator';

const Stack = createStackNavigator();
export const GlobalStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginStack" component={LoginScreen} />
            <Stack.Screen name="SideMenu" component={SideMenuNavigator} />

        </Stack.Navigator>
    );
};