import React, { useCallback } from "react";
import { NavigationDropdown } from "../../components/navigation-dropdown";
import { Button } from "@components/button";
import { BackgroundView } from "@components/backgound-view";
import { useSelectors } from "./hooks/use-selectors";
import { View } from "react-native";

import { styles } from "./styles";
import { useInitApp } from "./hooks/use-init-app";
import { Input } from "@components/input";
import { useHandlers } from "./hooks/use-handlers";
import Spinner from "react-native-loading-spinner-overlay";
import { DismissKeyboard } from "@components/dismiss-keyboard";
import { useFocusEffect } from "@react-navigation/native";
import { navigationActions } from "../../redux-store";
import { useDispatch } from "react-redux";

export const InitialNavigationScreen = () => {
  const { initData, appIsLoading } = useSelectors();
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(navigationActions.setOffset(0));
    }, [])
  );

  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 71))
    .fill("")
    .map((v, idx) => ({
      label: `${now - idx}`,
      value: `${now - idx}`,
    }));

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
          <View style={styles.navContainer}>
            <NavigationDropdown
              items={initData}
              placeholder={{ label: "All drivers", value: "All" }}
              onValueChange={driverHandler}
              value={driverId}
            />
            <NavigationDropdown
              items={years}
              placeholder={{ label: "All years", value: "All" }}
              onValueChange={seasonHandler}
              value={season}
            />
            <Input
              text="Show results on page:"
              onEndEditing={limitHandler}
              defaultValue={limit}
            />
          </View>
        )}
      </DismissKeyboard>
      <View style={styles.buttonsBlock}>
        <Button title="Reset" onPress={resetHandler} />
        <Button title="Submit" onPress={navigateToDrivers} />
      </View>
    </BackgroundView>
  );
};
