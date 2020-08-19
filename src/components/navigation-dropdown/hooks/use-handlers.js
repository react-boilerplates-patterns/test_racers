import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useHandlers = () => {
  const dispatch = useDispatch();
  const valueHandler = useCallback(() => {}, [dispatch]);
};
