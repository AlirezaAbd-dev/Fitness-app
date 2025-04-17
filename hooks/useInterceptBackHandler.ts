import { useFocusEffect } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';

type UseInterceptBackHandlerProps = {
  onBack?: () => void;
  shouldBlock?: boolean;
};

export function useInterceptBackHandler({
  onBack,
}: UseInterceptBackHandlerProps) {
  const [shouldBlock, setShouldBlock] = useState(true);

  const navigation = useNavigation();
  const hasInterceptedRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (!shouldBlock) return;

      const handler = (e: any) => {
        if (hasInterceptedRef.current) return;

        e.preventDefault();
        hasInterceptedRef.current = true;

        onBack?.();
      };

      navigation.addListener('beforeRemove', handler);
      return () => {
        navigation.removeListener('beforeRemove', handler);
        hasInterceptedRef.current = false;
      };
    }, [navigation, shouldBlock, onBack]),
  );

  return { setShouldBlock };
}
