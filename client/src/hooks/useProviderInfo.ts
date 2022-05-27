import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import bigNumberToNumber from '@app/utils/bigNumberToNumber';
import useTransactionContract from './useTransactionContract';

const useProviderInfo = () => {
  const [walletBalance, setWalletBalance] = useState('');
  const { currentAccount, processingTransaction } = useTransactionContract();

  useEffect(() => {
    if (!!currentAccount && !processingTransaction) {
      (async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(currentAccount);
        const decimalBalance = bigNumberToNumber(balance).toFixed(4);
        setWalletBalance(decimalBalance);
      })();
    }
  }, [currentAccount, processingTransaction]);

  return {
    walletBalance,
  };
};

export default useProviderInfo;
