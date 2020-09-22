import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {store} from 'redux-store';
import {AppContainer} from 'routes';
import {AlertModal} from 'components/alert-modal';

import {navigationRef, isReadyRef} from 'routes';
import {useCheckInternetConnection, useSetNavigationReference} from 'hooks';

export default function App() {
  useCheckInternetConnection();
  useSetNavigationReference(isReadyRef);

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <StatusBar barStyle="dark-content" />
          <AppContainer />
          <AlertModal />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
