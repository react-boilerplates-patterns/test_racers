import React from "react";
import { Overlay } from "react-native-elements";

import { styles } from "./styles";
import { useSelectors, useHandlers } from "./hooks";
import { NotifyBody } from "./components";

export const AlertModal = () => {
  const { isVisibleAlert, alertData } = useSelectors();
  const { onDismiss } = useHandlers();

  const getModalBody = () => {
    return <NotifyBody alertData={alertData} />;
  };

  return (
    <Overlay
      animated
      transparent
      isVisible={isVisibleAlert}
      onBackdropPress={onDismiss}
      animationType="slide"
      height={250}
      width="auto"
      borderRadius={8}
      containerStyle={styles.container}
      overlayStyle={styles.overlay}
      overlayBackgroundColor={"rgba(1,8,5,0.67)"}
    >
      <>{getModalBody()}</>
    </Overlay>
  );
};
