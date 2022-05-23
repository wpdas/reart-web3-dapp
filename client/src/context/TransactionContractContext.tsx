import React, { createContext } from 'react';
import { ethers } from 'ethers';
import { contractAddress, transactionsContractABI } from '@app/utils/constants';

export const TransactionContractContext = createContext({});

// This object is provided by MetaMask
const { ethereum } = window;

const getEthereumContract = () => {
  // Connect with the Provider -> MetaMask in this case
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  //Smart contract address, Transactions Smart Contract Abi, Signer
  const transactionContract = new ethers.Contract(
    contractAddress,
    transactionsContractABI,
    signer,
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionContractProvider: React.FC<{
  children: React.ReactChild;
}> = ({ children }) => {
  return (
    <TransactionContractContext.Provider value={{}}>
      {children}
    </TransactionContractContext.Provider>
  );
};
