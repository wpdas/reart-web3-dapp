import { useEffect, useState } from 'react';

/**
 * Use debounce hook. It can be used to cause a delay before changing the value
 * @param {any} value Any value to be changed after the delay
 * @param {number} delay Delay in seconds
 * @returns {any} Changed value after the given delay
 */
const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
