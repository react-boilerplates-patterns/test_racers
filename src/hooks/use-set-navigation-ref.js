import {useEffect} from 'react';

export const useSetNavigationReference = (isReadyRef) => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
};
