import React, {useCallback} from 'react';
import {DataTable} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from 'project-constants';
import {styles} from './styles';

export const DataTableRows = ({drivers}) => {
  const navigation = useNavigation();

  return drivers.map((driver, index) => {
    const navigateToBio = useCallback(() => {
      navigation.navigate(screenNames.PROFILE_NAVIGATOR, {url: driver.url});
    });
    return (
      <DataTable.Row key={index + 1}>
        <DataTable.Cell
          hitSlop={{top: 30, left: 30, bottom: 30, right: 30}}
          onPress={
            navigateToBio
          }>{`${driver.familyName} ${driver.givenName}`}</DataTable.Cell>
        <DataTable.Cell style={styles.permanentNumberRow}>
          {driver?.permanentNumber || ''}
        </DataTable.Cell>
        <DataTable.Cell>{driver.nationality}</DataTable.Cell>
        <DataTable.Cell>{driver.dateOfBirth}</DataTable.Cell>
      </DataTable.Row>
    );
  });
};
