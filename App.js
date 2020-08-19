import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '@redux-store';
import {AppContainer} from '@routes';
import {AlertModal} from '@components/alert-modal';

import {navigationRef, isReadyRef} from '@routes';
import {useCheckInternetConnection, useSetNavigationReference} from '@hooks';

export default function App() {
  useCheckInternetConnection();
  useSetNavigationReference(isReadyRef);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
        <AlertModal />
      </NavigationContainer>
    </Provider>
  );
}
