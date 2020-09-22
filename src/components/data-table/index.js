import React from 'react';
import {DataTable as RNPDataTable} from 'react-native-paper';
import {
  DataTableHeader,
  DataTableRows,
  DataTablePagination,
} from './components';
import {ScrollView} from 'react-native';
import {DEFAULT_ITEMS_LIMIT} from 'constants/config';
import {useTableNavigation} from './hooks/use-table-navigation';

export const DataTable = ({drivers, totalDrivers, offset}) => {
  const {getNextDriversPage, page} = useTableNavigation(offset);
  const from = page * DEFAULT_ITEMS_LIMIT;
  const to = (page + 1) * DEFAULT_ITEMS_LIMIT;

  return (
    <ScrollView>
      <RNPDataTable>
        <DataTableHeader />
        <DataTableRows drivers={drivers} />
        <DataTablePagination
          onPageChange={getNextDriversPage}
          paginationData={{
            page,
            numberOfPages: Math.floor(totalDrivers / DEFAULT_ITEMS_LIMIT),
            label: `${from + 1}-${to} of ${totalDrivers}`,
          }}
        />
      </RNPDataTable>
    </ScrollView>
  );
};
