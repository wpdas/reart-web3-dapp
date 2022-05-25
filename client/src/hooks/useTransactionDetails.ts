import useTransactionContract from './useTransactionContract';

const useTransactionDetails = (imageTokenId?: string) => {
  const { transactions, loading } = useTransactionContract();

  const currentTransaction = transactions?.find(
    transaction => transaction.keyword === imageTokenId,
  );

  return {
    transaction: currentTransaction,
    ready: !loading,
  };
};

export default useTransactionDetails;
