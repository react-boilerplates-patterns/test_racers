import React from 'react';
import {NavigationDropdown} from '@components/navigation-dropdown';
import {View} from 'react-native';
import {styles} from './styles';
import {Input} from '@components/input';

export const NavigationSelectors = ({
  initData,
  dataToShow,
  driverHandler,
  seasonHandler,
  limitHandler,
}) => {
  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 71))
    .fill('')
    .map((v, idx) => ({
      label: `${now - idx}`,
      value: `${now - idx}`,
    }));

  return (
    <View style={styles.navContainer}>
      <NavigationDropdown
        items={initData}
        placeholder={{label: 'All drivers', value: 'All'}}
        onValueChange={driverHandler}
        value={dataToShow.driverId}
      />
      <NavigationDropdown
        items={years}
        placeholder={{label: 'All years', value: 'All'}}
        onValueChange={seasonHandler}
        value={dataToShow.season}
      />
      <Input
        text="Show results on page:"
        onChangeText={limitHandler}
        defaultValue={dataToShow.limit}
      />
    </View>
  );
};
