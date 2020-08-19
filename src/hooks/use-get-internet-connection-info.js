import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

export const useCheckInternetConnection = () => {
  useEffect(() => {
    const CheckConnectivity = () => {
      if (Platform.OS === 'android') {
        NetInfo.fetch().then((isConnected) => {
          if (!isConnected) {
            Alert.alert('You are offline!');
          }
        });
      } else {
        NetInfo.isConnected.addEventListener('connectionChange');
      }
    };

    CheckConnectivity();
  }, []);
};
