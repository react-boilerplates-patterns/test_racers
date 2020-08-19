import React, { useLayoutEffect, useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { useCachedResources } from "@hooks";
import { store } from "@redux-store";
import { AppContainer } from "@routes";
import { AlertModal } from "@components/alert-modal";

import { navigationRef, isReadyRef } from "@routes";

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}
        >
          <StatusBar barStyle="dark-content" />
          <AppContainer />
          <AlertModal />
        </NavigationContainer>
      </Provider>
    );
  }
}
