/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const useEthToUsd = (eth?: string | number) => {
  const [usdValue, setUsdValue] = useState('0.00');

  useEffect(() => {
    if (eth) {
      (async () => {
        try {
          const response = await fetch(
            'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
          );

          const { USD } = await response.json();
          const conversion = USD * Number(eth);
          setUsdValue(conversion.toFixed(2));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [eth]);

  return usdValue;
};

export default useEthToUsd;
