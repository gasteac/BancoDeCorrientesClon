import { StyleSheet } from 'react-native';
export const globalColors = {
  primary: '#ffd75f',
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
    shadowColor:'black',
    elevation:3,
    borderRadius: 10,
    padding: 8,
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  primaryButtonText:{
    fontSize:18,
    fontWeight:'400',
    color:'#123262',
  },
  productsButton: {
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 10,
    padding: 12,
    gap: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productsButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  productsButtonSubText:{
    fontSize:15,
    color:'black',
  },
  buttonText: {
    color: globalColors.principalColor,
    fontSize: 20,
    fontWeight:'600',
    fontFamily: 'Roboto-Regular',
  },
  primaryText:{
    fontFamily: 'Roboto-Regular',
    fontSize:20,
    color:'black',
    marginBottom:15,
  },
  defaultButton:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    height:100,
    width:100,
    borderRadius: 20,
    backgroundColor: globalColors.primary,
    color:'white',
  },
  defaultButtonText:{
    color:'black',
    fontSize:15
  },
});