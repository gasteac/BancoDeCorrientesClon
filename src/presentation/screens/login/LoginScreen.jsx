import { View, Dimensions, Image, Text, Modal, Pressable, StyleSheet } from 'react-native'
import { globalColors } from '../../theme/theme'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '../../components/shared/Ionicons';
import { useState } from 'react';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { TextInput } from 'react-native-paper';

export const LoginScreen = () => {
    const [rememberUser, setRememberUser] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const width = Dimensions.get('window').width;
    const imagesCarousel = [
        require('../../assets/images/carousel/2.jpg'),
        require('../../assets/images/carousel/3.jpg'),
        require('../../assets/images/carousel/4.jpg'),
        require('../../assets/images/carousel/5.jpg'),
        require('../../assets/images/carousel/6.jpg'),
    ]
    return (
        <View style={{ paddingHorizontal: 20, alignItems: 'center', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Carousel
                    mode="parallax"
                    // mode='scale-fade-in-out'
                    // parallaxScrollingScale={0}
                    // parallaxScrollingOffset={0}
                    scrollAnimationDuration={1000}
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={imagesCarousel}
                    // onSnapToItem={(index) => console.log('current index:', index)}
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
                <TextInput maxLength={30} underlineColor={globalColors.principalColor} activeUnderlineColor={globalColors.primary} style={{ paddingVertical: 20, justifyContent: 'center', fontSize: 14, width: '100%', color: 'black', height: 20, borderTopEndRadius: 10, borderTopStartRadius: 10, marginTop: 30, backgroundColor: 'white', borderColor: 'black' }} placeholder='Usuario' placeholderTextColor='#a0a0a0' />
                <TextInput maxLength={30} underlineColor={globalColors.principalColor} activeUnderlineColor={globalColors.primary} style={{ paddingVertical: 20, justifyContent: 'center', fontSize: 14, width: '100%', color: 'black', height: 20, borderTopEndRadius: 10, borderTopStartRadius: 10, marginTop: 10, backgroundColor: 'white', borderColor: 'black' }} placeholder='Contraseña' placeholderTextColor='#a0a0a0' secureTextEntry />
                <BouncyCheckbox
                    style={{ marginTop: 20, gap: 10, alignSelf: 'flex-start' }}
                    onPress={(isChecked) => { setRememberUser(isChecked) }}
                    size={30}
                    textComponent={<Text style={{ color: '#707070' }}>Recordar Usuario</Text>}
                    iconComponent={<Ionicons name={rememberUser ? "checkmark-done-circle" : "checkmark-circle-outline"} size={30} color={rememberUser ? globalColors.primaryDarker : '#707070'} />}
                    fillColor="transparent"
                    unFillColor="transparent"
                />
            </View>
            <View style={{ flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 20 }}>
                <PrimaryButton onPress={() => navigation.navigate('Pagina Principal')} label='Iniciar Sesión' />
                <Pressable style={{ justifyContent: 'center', width: '100%', gap: 5, alignItems: 'center', alignContent: 'center', marginVertical: 30 }} onPress={() => setModalVisible(true)}>
                    <Ionicons name='finger-print' size={45} color={globalColors.principalColor} />
                    <Text style={{ color: globalColors.principalColor, fontSize: 15 }}>Usar Huella</Text>
                </Pressable>
                <Text style={{ color: globalColors.principalColor, fontSize: 14 }}>Registrarse / Desbloquear</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', bottom: 0, width: '120%', padding: 5, justifyContent: 'space-evenly', backgroundColor: '#ebebeb' }}>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='location-outline' size={40} color='black' />
                    <Text style={{ color: 'black' }}>Sucursal</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='gift-outline' size={40} color='black' />
                    <Text style={{ color: 'black' }}>Beneficios</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='document-text-outline' size={40} color='black' />
                    <Text style={{ color: 'black' }}>Informes</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='calendar-outline' size={40} color='black' />
                    <Text style={{ color: 'black' }}>Turnos</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='headset-outline' size={40} color='black' />
                    <Text style={{ color: 'black' }}>Soporte</Text>
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
                        <Text style={styles.modalText}>Ingresar con huella?</Text>
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
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    modalText: {
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 21,
    },
});