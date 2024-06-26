import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  form: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    transform: [{ translateY: -50 }],
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  loginText: {
    fontSize: 30,
    fontWeight: '500',
    width: "100%",
    textAlign: 'center',
  },
  inputSection: {
    width: '100%',
    marginTop: 60,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  inputImage: {
    backgroundColor: '#FF4141',
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
    transform: [{ translateX: -165 }],
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#FF4141',
    borderWidth: 1,
    borderRadius: 50,
    fontWeight: '900',
    textAlign: 'center',
    color: '#000000',
  },
  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FF4141',
    borderRadius: 50,
    marginTop: 40,
    width: '100%',
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 5,
    fontSize: 24,
  },
  registerLink: {
    textAlign: 'center',
    color: '#FF4141',
    padding: 5,
    fontSize: 15,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
  }
});
