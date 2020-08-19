import React from 'react';
import {BackgroundView} from '@components/backgound-view';
import {DriversList} from '@components/drivers-list';
import {useGetDrivers} from './hooks/use-get-drivers';
import {useSelectors} from './hooks/use-selectors';
import Spinner from 'react-native-loading-spinner-overlay';
import {EmptyList} from '../../components/emty-list';
import {DriversBottomNavigation} from './components/bottom-navigation';
import {useRoute} from '@react-navigation/native';

export const DriversScreen = () => {
  const {params} = useRoute();
  const {driverId, season, limit} = params;
  const {data, dataIsLoading} = useSelectors();

  useGetDrivers({driverId, season, limit});

  return (
    <BackgroundView>
      {!data ? (
        <Spinner visible={dataIsLoading} />
      ) : (
        <>
          {data.length === 0 ? <EmptyList /> : <DriversList list={data} />}
          <DriversBottomNavigation
            isLoading={dataIsLoading}
            driverData={{driverId, season, limit}}
          />
        </>
      )}
    </BackgroundView>
  );
};
