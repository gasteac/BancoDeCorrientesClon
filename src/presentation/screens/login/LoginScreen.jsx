import { View, Dimensions, Image, Text, Modal, Pressable, StyleSheet } from 'react-native'
import { globalColors } from '../../theme/theme'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '../../components/shared/Ionicons';
import { useState } from 'react';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../../redux/actions/authActions';


export const LoginScreen = () => {
    const dispatch = useDispatch()
    const [rememberUser, setRememberUser] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [username, setUsername] = useState('Gaston Acosta')
    const [password, setPassword] = useState('1234')
    const navigation = useNavigation()
    const width = Dimensions.get('window').width;
    const imagesCarousel = [
        require('../../assets/images/carousel/2.jpg'),
        require('../../assets/images/carousel/3.jpg'),
        require('../../assets/images/carousel/4.jpg'),
        require('../../assets/images/carousel/5.jpg'),
    ]
    return (
        <View style={{ paddingHorizontal: 20, alignItems: 'center', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Carousel
                    mode="parallax"
                    // mode='scale-fade-in-out'
                    // parallaxScrollingScale={0}
                    // parallaxScrollingOffset={0}
                    scrollAnimationDuration={1500}
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={imagesCarousel}
                    renderItem={({ index }) => (
                        <View >
                            <Image
                                resizeMode='cover'
                                style={{ borderRadius: 12, height: width / 2, width: width, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}
                                source={imagesCarousel[index]}
                            />
                        </View>
                    )}
                />
                {/* <Image style={{ height: 50, width: 50, position: 'absolute', right: 45, top: 25 }} resizeMode='contain' source={require('../../assets/images/BCO2.png')} /> */}
                <Image style={{ height: 150, position: 'absolute', alignSelf: 'center', bottom: -20 }} resizeMode='contain' source={require('../../assets/images/logoLogin.png')} />
            </View>
            {/* <Text style={{ color: globalColors.principalColor, fontSize: 14 }}>v1726</Text> */}
            <View style={{ width: '100%', marginTop: 20 }}>
                <TextInput
                    maxLength={25}
                    underlineColor={globalColors.principalColor}
                    activeUnderlineColor={globalColors.primary}
                    style={{ fontFamily: 'Poppins-Medium', paddingVertical: 20, justifyContent: 'center', fontSize: 14, width: '100%', color: 'black', height: 20, borderTopEndRadius: 10, borderTopStartRadius: 10, marginTop: 30, backgroundColor: 'white', borderColor: 'black' }}
                    placeholder="Usuario"
                    placeholderTextColor="#a0a0a0"
                    value={username}
                    onChangeText={user => setUsername(user)}
                />
                <TextInput
                    maxLength={25}
                    underlineColor={globalColors.principalColor}
                    activeUnderlineColor={globalColors.primary}
                    style={{ fontFamily: 'Poppins-Medium', paddingVertical: 20, justifyContent: 'center', fontSize: 14, width: '100%', color: 'black', height: 20, borderTopEndRadius: 10, borderTopStartRadius: 10, marginTop: 10, backgroundColor: 'white', borderColor: 'black' }}
                    placeholder="Contraseña"
                    placeholderTextColor="#a0a0a0"
                    secureTextEntry
                    value={password}
                    onChangeText={pass => setPassword(pass)}
                />
                <BouncyCheckbox
                    style={{ marginTop: 20, gap: 10, alignSelf: 'flex-start' }}
                    onPress={(isChecked) => { setRememberUser(isChecked) }}
                    size={30}
                    textComponent={<Text style={{ fontFamily: 'Poppins-Medium', color: '#707070', alignSelf: 'flex-end' }}>Recordar Usuario</Text>}
                    iconComponent={<Ionicons name={rememberUser ? "checkmark-done-circle" : "checkmark-circle-outline"} size={30} color={rememberUser ? globalColors.primaryDarker : '#707070'} />}
                    fillColor="transparent"
                    unFillColor="transparent"
                />
            </View>
            <View style={{ flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 20, marginBottom: 10 }}>

                <PrimaryButton onPress={() => (
                    dispatch(loginSuccess({username:username})),
                    navigation.replace('SideMenu')
                )} label='Iniciar Sesión' />
                <Text style={{ color: globalColors.principalColor, fontSize: 14, fontFamily: 'Poppins-Regular', marginTop: 10 }}>Registrarse / Desbloquear</Text>
                
                <Pressable style={{ justifyContent: 'center', width: '100%', gap: 5, alignItems: 'center', alignContent: 'center', marginVertical: 20 }} onPress={() => setModalVisible(true)}>
                    <Ionicons name='finger-print' size={35} color={globalColors.principalColor} />
                    <Text style={{ color: globalColors.principalColor, fontSize: 14, fontFamily: 'Poppins-Regular' }}>Usar Huella</Text>
                </Pressable>


            </View>
            <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', bottom: 0, width: '120%', padding: 5, justifyContent: 'space-evenly', backgroundColor: '#ebebeb' }}>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='location-outline' size={40} color='black' />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>Sucursal</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='gift-outline' size={40} color='black' />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>Beneficios</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='document-text-outline' size={40} color='black' />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>Informes</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='calendar-outline' size={40} color='black' />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>Turnos</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='headset-outline' size={40} color='black' />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>Soporte</Text>
                </View>
            </View>
            <Modal
                hardwareAccelerated={true}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ya me pedís mucho..</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )


}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        backgroundColor: '#ffca2b',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '80%',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: globalColors.principalColor,
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        paddingTop: 5

    },
    modalText: {
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 21,
        fontFamily: 'Poppins-Medium',
    },
});