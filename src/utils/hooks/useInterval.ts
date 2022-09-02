import { Dispatch, SetStateAction, useEffect, useRef } from "react";

/**
 * @param {setState} setCount
 * @param {number | null} delay
*/
export function useInterval(setCount: Dispatch<SetStateAction<void>>, delay: number | null) {
  const savedCallback = useRef() as React.MutableRefObject<() => void>;
  
  useEffect(() => {
    savedCallback.current = setCount;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// 사용할 때는 다음과 같이
// useInterval(() => setCount(count + 1), isPaused ? null : 100) 