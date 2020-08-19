import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalRoot: {
    alignItems: 'center',
    padding: 16,
    maxWidth: 450,
    backgroundColor: '#6a6767',
    borderRadius: 8,
    width: Dimensions.get('window').width - 40,
  },
  title: {
    marginBottom: 39,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  text: {
    marginBottom: 38,
    color: 'white',
    fontSize: 20,
  },
  button: {
    fontSize: 25,
  },
});
