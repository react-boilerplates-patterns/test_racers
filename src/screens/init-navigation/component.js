import React, {useCallback} from 'react';
import {BackgroundView} from '@components/backgound-view';
import {useSelectors} from './hooks/use-selectors';
import {useInitApp} from './hooks/use-init-app';
import {useHandlers} from './hooks/use-handlers';
import Spinner from 'react-native-loading-spinner-overlay';
import {DismissKeyboard} from '@components/dismiss-keyboard';
import {useFocusEffect} from '@react-navigation/native';
import {navigationActions} from '@redux-store';
import {useDispatch} from 'react-redux';
import {NavigationSelectors, NavigationButtons} from './components';

export const InitialNavigationScreen = () => {
  const {initData, appIsLoading} = useSelectors();
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(navigationActions.setOffset(0));
    }, []),
  );

  const {
    navigateToDrivers,
    resetHandler,
    driverId,
    season,
    limit,
    driverHandler,
    seasonHandler,
    limitHandler,
  } = useHandlers();

  useInitApp();

  return (
    <BackgroundView>
      <DismissKeyboard>
        {!initData ? (
          <Spinner visible={appIsLoading} />
        ) : (
          <NavigationSelectors
            initData={initData}
            dataToShow={{driverId, season, limit}}
            driverHandler={driverHandler}
            seasonHandler={seasonHandler}
            limitHandler={limitHandler}
          />
        )}
      </DismissKeyboard>
      <NavigationButtons
        navigateToDrivers={navigateToDrivers}
        resetHandler={resetHandler}
      />
    </BackgroundView>
  );
};
