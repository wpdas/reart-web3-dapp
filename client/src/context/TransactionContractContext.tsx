/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import bigNumberToNumber from '@app/utils/bigNumberToNumber';
import {
  contractAddress,
  defaultPlatformAccountToken,
  transactionsContractABI,
} from '@app/utils/constants';

type Transaction = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  timestampDate: Date;
  message: string;
  keyword: string;
  amount: number;
};

type ContextProps = {
  connectWallet: () => Promise<void>;
  buyNFTTransaction: (transactionInformation: {
    amount: number;
    id: string;
    desc: string;
  }) => Promise<void>;
  transactionCount: number;
  currentAccount?: string;
  loading?: boolean;
  processingTransaction?: boolean;
  transactions?: Transaction[];
};

const defaultState: ContextProps = {
  connectWallet: () => {
    throw new Error('connectWallet must be defined!');
  },
  buyNFTTransaction: () => {
    throw new Error('buyNFTTransaction must be defined!');
  },
  transactionCount: 0,
};

const STORAGE_TRANSACTION_COUNT_KEY = 'transactionCount';

export const TransactionContractContext =
  createContext<ContextProps>(defaultState);

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

  return transactionContract;
};

export const TransactionContractProvider: React.FC<{
  children: React.ReactChild;
}> = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [loading, setLoading] = useState(true);
  const [processingTransaction, setProcessingTransaction] = useState(false);

  // Get previous transactionCount
  const initialTransactionCount = localStorage.getItem(
    STORAGE_TRANSACTION_COUNT_KEY,
  );

  const [transactionCount, setTransactionCount] = useState(
    initialTransactionCount ? Number(initialTransactionCount) : 0,
  );

  const getAllTransactions = async () => {
    try {
      if (!ethereum) {
        setLoading(false);
        return alert('Please install MetaMask');
      }

      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();

      const structuredTransactions: Transaction[] = availableTransactions.map(
        (transaction: any) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000,
          ).toLocaleString(),
          timestampDate: new Date(transaction.timestamp.toNumber() * 1000),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: bigNumberToNumber(transaction.amount),
        }),
      );

      // Get current account
      const [account] = await ethereum.request({ method: 'eth_accounts' });

      // Filter to get only transactions made by the current account
      // Filter the timestamp too: it should get only the transactions made
      // after version 1 release.
      const startDate = new Date(2022, 4, 25, 0, 0, 0);
      const filteredByAddressFromTransactions = structuredTransactions.filter(
        transaction =>
          transaction.addressFrom.toLowerCase() === account &&
          transaction.timestampDate.getTime() > startDate.getTime(),
      );

      setTransactions(filteredByAddressFromTransactions);

      // Get the transaction count provided by the Smart Contract file (Transactions.sol)
      const updatedTransactionCount =
        await transactionContract.getTransactionCount();
      setTransactionCount(updatedTransactionCount.toNumber());

      // Store current transactionCount
      localStorage.setItem(
        STORAGE_TRANSACTION_COUNT_KEY,
        updatedTransactionCount.toNumber(),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    setLoading(true);
    try {
      if (!ethereum) {
        setLoading(false);
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        await getAllTransactions();
      } else {
        console.log('No accounts found');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error('No ethereum object.');
    }
  };

  const connectWallet = async () => {
    setLoading(true);

    try {
      if (!ethereum) {
        setLoading(false);
        return alert('Please install MetaMask');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
      await getAllTransactions();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error('No ethereum object.');
    }
  };

  const buyNFTTransaction = async (transactionInformation: {
    amount: number;
    id: string;
    desc: string;
  }) => {
    setProcessingTransaction(true);
    try {
      if (!ethereum) {
        setProcessingTransaction(false);
        return alert('Please install MetaMask');
      }

      const { amount, id, desc } = transactionInformation;
      const transactionContract = getEthereumContract();
      // converts amount type to hex
      const parsedAmount = ethers.utils.parseEther(amount.toString());

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: defaultPlatformAccountToken,
            // hex type. To get to know the value in Ether, go to https://www.rapidtables.com/convert/number/hex-to-decimal.html
            // convert the value, copy the decimal value, go to https://eth-converter.com/
            // past it on Gwei field. You'll get the value in Ether.
            gas: '0x5208', // 21000 GWEI,
            value: parsedAmount._hex, // GWEI or hex
          },
        ],
      });

      // This is the methods provided by the Smart Contract file (Transactions.sol)
      // Transactions.sol -> addToBlockchain expected props: address, amount, message, keyword
      const transactionHash = await transactionContract.addToBlockchain(
        defaultPlatformAccountToken,
        parsedAmount,
        desc,
        id,
      );

      console.log(`Loading / Mining - ${transactionHash.hash}`);
      await transactionHash.wait(); // wait until the transaction is mined

      console.log(`Success - ${transactionHash.hash}`);

      // Get the transaction count provided by the Smart Contract file (Transactions.sol)
      const updatedTransactionCount =
        await transactionContract.getTransactionCount();
      setTransactionCount(updatedTransactionCount.toNumber());

      // Store current transactionCount
      localStorage.setItem(
        STORAGE_TRANSACTION_COUNT_KEY,
        updatedTransactionCount.toNumber(),
      );

      // Get fresh transactions
      await getAllTransactions();

      setProcessingTransaction(false);
    } catch (error) {
      console.log(error);
      setProcessingTransaction(false);
      throw new Error('No ethereum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (ethereum) {
      // On disconnect
      ethereum.on('accountsChanged', (accounts: string[]) => {
        if (!accounts.length) {
          setCurrentAccount(undefined);
          setTransactions([]);
          setLoading(false);
          setProcessingTransaction(false);
        }
      });
    }
  }, []);

  return (
    <TransactionContractContext.Provider
      value={{
        loading,
        processingTransaction,
        currentAccount,
        transactions,
        transactionCount,
        connectWallet,
        buyNFTTransaction,
      }}>
      {children}
    </TransactionContractContext.Provider>
  );
};
