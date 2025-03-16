'use client';

import { useState, useMemo, memo } from 'react';
import { ClientTitle } from './client-title';

const ClientButton = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setValue(prev => prev + 1);
  };

  const handleOtherClick = () => {
    setCount(prev => prev + 1);
  };

  // 用 useMemo 記住結果，僅在 value 改變時重新計算
  const computedValue = useMemo(() => {
    console.log('Computing...');
    return value * 2;
  }, [value]);

  return (
    <>
      <ClientTitle>Zevi</ClientTitle>
      <p>{value}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={handleClick}>Add value</button>
      <button onClick={handleOtherClick}>Other Button ({count})</button>
    </>
  );
};

export default memo(ClientButton);
