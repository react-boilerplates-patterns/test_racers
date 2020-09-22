import React from 'react';
import {BackgroundView} from 'components/backgound-view';
import {useGetDrivers} from './hooks/use-get-drivers';
import {useSelectors} from './hooks/use-selectors';
import Spinner from 'react-native-loading-spinner-overlay';
import {EmptyList} from 'components/emty-list';
import {DataTable} from 'components/data-table';

export const DriversScreen = () => {
  const {drivers, driversAreLoading, offset, totalDrivers} = useSelectors();

  useGetDrivers();

  return (
    <BackgroundView>
      {!drivers ? (
        <Spinner visible={driversAreLoading} />
      ) : (
        <>
          {!drivers.length ? (
            <EmptyList />
          ) : (
            <DataTable
              drivers={drivers}
              offset={offset}
              totalDrivers={totalDrivers}
            />
          )}
        </>
      )}
    </BackgroundView>
  );
};
