import React from "react";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screenNames } from "@constants";

export const DriversListItem = React.memo(({ item, idx }) => {
  const navigation = useNavigation();

  return (
    <ListItem
      title={`${item.familyName} ${item.givenName}`}
      subtitle={item.nationality}
      onPress={() => {
        navigation.navigate(screenNames.PROFILE_NAVIGATOR, { url: item?.url });
      }}
      bottomDivider
      chevron
    />
  );
});
