import React from 'react';
import {DataTable} from 'react-native-paper';

export const DataTablePagination = ({paginationData, onPageChange}) => {
  console.log('paginationData', paginationData);
  return (
    <DataTable.Pagination
      page={paginationData.page}
      numberOfPages={paginationData.numberOfPages}
      onPageChange={onPageChange}
      label={paginationData.label}
    />
  );
};
