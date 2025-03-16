'use client';

import { useState } from 'react';
import { ClientTitle } from './client-title';

export const ClinetButton = () => {

  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(prev => prev + 1)
  }

  return (
    <>
      <ClientTitle>Zevi</ClientTitle>
      <p>{value}</p>
      <button onClick={handleClick}>Add value</button>
    </>

  )
}