import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, transactionsContractABI } from '@app/utils/constants';

type FormData = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

type ContextProps = {
  connectWallet: () => Promise<void>;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  sendTransaction: () => Promise<void>;
  formData: FormData;
  currentAccount?: string;
  loading?: boolean;
  processingTransaction?: boolean;
};

const initialFormData: FormData = {
  addressTo: '',
  amount: '',
  keyword: '',
  message: '',
};

const defaultState: ContextProps = {
  connectWallet: () => {
    throw new Error('connectWallet must be defined!');
  },
  handleChange: () => {
    throw new Error('handleChange must be defined!');
  },
  setFormData: () => {
    throw new Error('setFormData must be defined!');
  },
  sendTransaction: () => {
    throw new Error('sendTransaction must be defined!');
  },
  formData: initialFormData,
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
  const [loading, setLoading] = useState(true);
  const [processingTransaction, setProcessingTransaction] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // Get previous transactionCount
  const initialTransactionCount = localStorage.getItem(
    STORAGE_TRANSACTION_COUNT_KEY,
  );

  const [transactionCount, setTransactionCount] = useState(
    initialTransactionCount || 0,
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const checkIfWalletIsConnected = async () => {
    setLoading(true);
    try {
      if (!ethereum) return alert('Please install MetaMask');

      // From where this eth_accounts?
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        //TODO: getAllTransactions();
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
      if (!ethereum) return alert('Please install MetaMask');

      // From where this eth_accounts?
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error('No ethereum object.');
    }
  };

  const sendTransaction = async () => {
    setProcessingTransaction(true);
    try {
      if (!ethereum) return alert('Please install MetaMask');

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      // converts amount type to hex
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
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
        addressTo,
        parsedAmount,
        message,
        keyword,
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

      // Clear inputs
      setFormData(initialFormData);

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

  return (
    <TransactionContractContext.Provider
      value={{
        loading,
        processingTransaction,
        currentAccount,
        formData,
        connectWallet,
        setFormData,
        handleChange,
        sendTransaction,
      }}>
      {children}
    </TransactionContractContext.Provider>
  );
};
