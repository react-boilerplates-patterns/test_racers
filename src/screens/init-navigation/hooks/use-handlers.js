import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { screenNames } from "@constants";
import { navigationActions } from "@redux-store";

export const useHandlers = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [driverId, setDriverId] = useState("All");
  const [season, setSeason] = useState("All");
  const [limit, setLimit] = useState("30");

  const navigateToDrivers = useCallback(() => {
    navigation.navigate(screenNames.DRIVERS_NAVIGATOR, {
      driverId,
      season,
      limit,
    });
  }, [driverId, season, limit]);

  const resetHandler = useCallback(() => {
    setDriverId("All");
    setSeason("All");
    setLimit("30");
  }, [dispatch]);

  const driverHandler = useCallback(
    (driverId) => {
      setDriverId(driverId);
    },
    [driverId]
  );

  const seasonHandler = useCallback(
    (year) => {
      setSeason(year);
    },
    [season]
  );

  const limitHandler = useCallback(
    (event) => {
      setLimit(event.nativeEvent.text);
      dispatch(navigationActions.setOffset(event.nativeEvent.text));
    },
    [limit]
  );

  return {
    navigateToDrivers,
    resetHandler,
    driverId,
    season,
    limit,
    driverHandler,
    seasonHandler,
    limitHandler,
  };
};
