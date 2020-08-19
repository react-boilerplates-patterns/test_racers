import React from "react";

import { FlatListView } from "@components/flat-list-view";
import { DriversListItem } from "./components";

export const DriversList = ({ list }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => <DriversListItem item={item} />;

  return (
    <FlatListView
      list={list}
      extractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
