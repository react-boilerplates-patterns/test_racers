import React from 'react';
import {DataTable} from 'react-native-paper';
import {headerTitles} from 'project-constants';

export const DataTableHeader = () => {
  return (
    <DataTable.Header>
      {headerTitles.map((header, index) => (
        <DataTable.Title key={index + 1000}>{header.title}</DataTable.Title>
      ))}
    </DataTable.Header>
  );
};
