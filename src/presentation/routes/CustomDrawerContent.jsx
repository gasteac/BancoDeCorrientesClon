import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '../components/shared/Ionicons';
import { globalColors, globalStyles } from '../theme/theme';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const activeScreen = useSelector(state => state.navigation.activeScreen);
    const nombre = useSelector(state => state.login.nombre);

    return (
        <View style={{ width: '100%', flex: 1 }}>
            <View
                style={{
                    backgroundColor: globalColors.principalColor,
                    marginBottom: 10,
                    padding: 10,
                }}>
                <Text
                    style={[
                        globalStyles.text,
                        {
                            fontSize: 12,
                            color: 'white',
                            alignSelf: 'center',
                            marginBottom: 10,
                            fontFamily: 'Poppins-Medium',
                            paddingTop: 5,
                        },
                    ]}>
                    Última sesión: 28/05/22 17:26
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        gap: 10,
                        marginBottom: 5,
                        alignItems: 'center',
                        alignContent: 'center',
                        paddingHorizontal: 10,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            resizeMode="cover"
                            source={require('../assets/images/profilePic.jpg')}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 100,
                                shadowColor: 'black',
                                borderWidth: 3,
                                borderColor: '#17f060',
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={[
                            globalStyles.text,
                            {
                                fontSize: 14,
                                color: 'white',
                                letterSpacing: 1,
                                flexWrap: 'wrap',
                                maxWidth: '70%',
                                fontFamily: 'Poppins-Medium',
                            },
                        ]}>
                        {nombre}
                    </Text>
                    <View
                        style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            bottom: -10,
                            right: 0,
                        }}>
                        <Text
                            style={{
                                color: '#17f060',
                                fontFamily: 'Poppins-Medium',
                                paddingTop: 5,
                                fontSize: 10,
                                marginTop: -5,
                            }}>
                            Dispositivo Vinculado
                        </Text>
                        <Ionicons name="phone-portrait-outline" color="#17f060" size={15} />
                    </View>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                {/* //LOS ITEMS ME TIENEN QUE NAVEGAR A LA PANTALLA DEL STACK NO AL STACK EN SI, POR EJ A PORTAL PRINCIPAL (DEL STACK MIS PRODUCTOS) */}
                <DrawerItem
                    label="Mis Productos"
                    icon={() => <Ionicons name="home" color={activeScreen === 'Mis Productos' ? 'white' : 'black'} />}
                    focused={activeScreen === 'Mis Productos'}
                    onPress={() => navigation.navigate('Mis Productos')}
                    style={{
                        backgroundColor: activeScreen === 'Mis Productos' ? globalColors.principalColor : 'transparent',
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                    labelStyle={{
                        color: activeScreen === 'Mis Productos' ? 'white' : 'black',
                        fontFamily: 'Poppins-Medium',
                        paddingTop: 5,
                    }}
                />


                <DrawerItem
                    label="MODO"
                    icon={() => (
                        <Image
                            resizeMode="cover"
                            source={require('../assets/images/Modo.png')}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 5,
                            }}
                        />
                    )}
                    focused={activeScreen === 'MODO'}
                    onPress={() => navigation.navigate('MODO')}
                    style={{
                        backgroundColor: activeScreen === 'MODO' ? globalColors.principalColor : 'transparent',
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                    labelStyle={{
                        color: activeScreen === 'MODO' ? 'white' : 'black',
                        fontFamily: 'Poppins-Medium',
                        paddingTop: 5,
                    }}
                />

                <DrawerItem
                    label="Perfil"
                    icon={() => <Ionicons name="person" color={activeScreen === 'Perfil' ? 'white' : 'black'} />}
                    focused={activeScreen === 'Perfil'}
                    onPress={() => navigation.navigate('Perfil')}
                    style={{
                        backgroundColor: activeScreen === 'Perfil' ? globalColors.principalColor : 'transparent',
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                    labelStyle={{
                        color: activeScreen === 'Perfil' ? 'white' : 'black',
                        fontFamily: 'Poppins-Medium',
                        paddingTop: 5,
                    }}
                />

               

                <DrawerItem
                    label="Cerrar Sesión"
                    icon={() => <Ionicons name="close-circle" color={activeScreen === 'Cerrar Sesión' ? 'white' : 'black'} />}
                    focused={activeScreen === 'Cerrar Sesión'}
                    onPress={() => navigation.navigate('Cerrar Sesión')}
                    style={{
                        backgroundColor: activeScreen === 'Cerrar Sesión' ? globalColors.principalColor : 'transparent',
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                    labelStyle={{
                        color: activeScreen === 'Cerrar Sesión' ? 'white' : 'black',
                        fontFamily: 'Poppins-Medium',
                        paddingTop: 5,
                    }}
                />

            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawerContent;