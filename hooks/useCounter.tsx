import React, { useEffect, useState } from 'react';

const useCounter = (
  initCounter: number,
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [counter, setCounter] = useState(initCounter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 0) {
          prev--;
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return [counter, setCounter];
};

export default useCounter;
