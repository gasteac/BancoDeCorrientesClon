import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburguerMenu />
            <Tab.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: {
                        fontFamily: 'Poppins-SemiBold',
                        paddingTop: 5
                    },
                    headerTitleAlign: 'center',
                }}
                initialRouteName='Principal'
            >
                <Tab.Screen name="Principal" component={ProfileScreen} />
                <Tab.Screen name="Configuración" component={SettingsScreen} />
            </Tab.Navigator>
        </>
    );
}