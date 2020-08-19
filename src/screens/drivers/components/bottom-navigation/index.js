import React from 'react';

import {Button} from '@components/button';
import {IconArrow} from '@components/icon-arrow';
import {styles} from './styles';
import {View} from 'react-native';
import {useHandlers} from './hooks/use-handlers';
import {useSelectors} from './hooks/use-selectors';

export const DriversBottomNavigation = ({isLoading, driverData}) => {
  const {offset, isLastPage} = useSelectors();
  const {nextPage, previousPage} = useHandlers({
    driverId: driverData.driverId,
    limit: driverData.limit,
    season: driverData.season,
    offset,
  });

  return (
    <View style={styles.buttonsBlock}>
      <Button
        loading={isLoading}
        iconComponent={<IconArrow direction="arrow-back-circle-outline" />}
        buttonStyle={styles.button}
        onPress={previousPage}
        disabled={offset <= 0 ? true : false}
        disabledStyle={styles.notDisplay}
      />

      <Button
        loading={isLoading}
        iconComponent={<IconArrow direction="arrow-forward-circle-outline" />}
        buttonStyle={styles.button}
        onPress={nextPage}
        disabled={isLastPage}
        disabledStyle={styles.notDisplay}
      />
    </View>
  );
};
