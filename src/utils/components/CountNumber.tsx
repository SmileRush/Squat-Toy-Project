import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const CountNumber = ({ startNumber = 0, endNumber = 1000, duration = 2 }) => {
  const spanRef    = useRef(null) as React.MutableRefObject<any>
  const countUpRef = useRef(null) as React.MutableRefObject<any>

  useEffect(() => {
    if (countUpRef.current === null) {
      countUpRef.current = new CountUp(spanRef.current, endNumber, {
        startVal: startNumber,
        duration: duration,
        formattingFn: (number) => number.toString().padStart(5, '0')
      })
    } else {
      countUpRef.current.update(endNumber)
    }

    return () => {
      // 혹시나 해당 Library를 Clean Up하는 함수가 있다면 여기서 호출
      // 지금 CountUp 라이브러리는 countUp 객체가 사라지면 자동으로 메모리에서 해제되는 듯
    }
  }, [endNumber])

  return (
    <>
      <span ref={spanRef}  />
    </>
  );
};

export default CountNumber