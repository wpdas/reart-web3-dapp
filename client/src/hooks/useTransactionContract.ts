import { useContext } from 'react';
import { TransactionContractContext } from '@app/context/TransactionContractContext';

const useTransactionContract = () => useContext(TransactionContractContext);

export default useTransactionContract;
