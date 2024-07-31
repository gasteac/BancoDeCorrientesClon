import { StyleSheet } from 'react-native';
export const globalColors = {
  primary: '#fcd04e',
  primaryLighter: '#fdf2d1',
  primaryDarker: '#dab442',
  principalColor: '#123262',
  principalColorDarker: '#0a162b',
  inactive: '#f0f0f0',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#ffff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 10,
    paddingTop: 4,
    paddingBottom: 4,
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  primaryButtonText:{
    fontSize:17,
    color:'#000000',
    fontFamily: 'Poppins-Regular',
    paddingTop:5,
    alignSelf:'flex-end',
    textAlign:'center',
  },
  productsButton: {
    backgroundColor: '#eeeeee',

 
    borderRadius: 10,
    padding: 5,
    gap: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productsButtonText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    paddingTop: 5,
  },
  productsButtonSubText:{
    fontSize:15,
    color:'black',
    fontFamily: 'Poppins-Regular',
 
  },
  buttonText: {
    color: globalColors.principalColor,
    fontSize: 20,
    fontWeight:'600',
    fontFamily: 'Poppins-Medium',
    paddingTop: 5,
  },
  primaryText:{
    fontFamily: 'Poppins-Medium',
    fontSize:20,
    color:'black',
    marginBottom:15,
  },
  defaultButton:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    height:70,
    width:'100%',
    borderRadius: 50,
    backgroundColor: globalColors.primary,
    color:'white',
    flexDirection:'row',
    gap:10,
  },
  defaultButtonText:{
    color:'black',
    fontSize:15,
    fontFamily: 'Poppins-Medium',
    paddingTop: 5,
  },
  boxButton: {
    backgroundColor: '#123262',
    shadowColor: 'black',
    elevation: 7,
    width: 60,
    height: 60,
    borderRadius:10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxButtonText:{
    color:'white',
    fontSize:8,
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
  },
});