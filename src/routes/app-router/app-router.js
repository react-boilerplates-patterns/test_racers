import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppNavigator} from 'routes';

const Stack = createStackNavigator();

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function AppContainer() {
  return (
    <Stack.Navigator initialRouteName="APP_NAVIGATOR" headerMode="none">
      <Stack.Screen name="APP_NAVIGATOR" component={AppNavigator} />
    </Stack.Navigator>
  );
}
