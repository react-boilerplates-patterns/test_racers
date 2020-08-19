import React from "react";
import { BackgroundView } from "@components/backgound-view";
import { DriversList } from "@components/drivers-list";
import { Button } from "@components/button";
import { IconArrow } from "@components/icon-arrow";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { useHandlers } from "./hooks/use-handlers";
import { useRoute } from "@react-navigation/native";
import { useGetDrivers } from "./hooks/use-get-drivers";
import { useSelectors } from "./hooks/use-selectors";
import Spinner from "react-native-loading-spinner-overlay";
import { EmptyList } from "../../components/emty-list";

export const DriversScreen = () => {
  const { params } = useRoute();
  const { driverId, season, limit } = params;
  const { data, dataIsLoading, offset, isLastPage, error } = useSelectors();
  const { nextPage, previousPage } = useHandlers({
    driverId,
    limit,
    season,
    offset,
  });
  useGetDrivers({ driverId, season, limit });

  return (
    <BackgroundView>
      {!data ? (
        <Spinner visible={dataIsLoading} />
      ) : (
        <>
          {data.length === 0 ? <EmptyList /> : <DriversList list={data} />}
          <View style={styles.buttonsBlock}>
            <Button
              loading={dataIsLoading}
              iconComponent={<IconArrow direction="arrow-left-circle" />}
              buttonStyle={styles.button}
              onPress={previousPage}
              disabled={offset <= 0 ? true : false}
              disabledStyle={styles.notDisplay}
            />

            <Button
              loading={dataIsLoading}
              iconComponent={<IconArrow direction="arrow-right-circle" />}
              buttonStyle={styles.button}
              onPress={nextPage}
              disabled={isLastPage}
              disabledStyle={styles.notDisplay}
            />
          </View>
        </>
      )}
    </BackgroundView>
  );
};
