import useTransactionContract from './useTransactionContract';

const useNFTAlreadyPurchased = (nftTokenId?: string) => {
  const { transactions } = useTransactionContract();

  if (transactions) {
    const exist = transactions.find(
      transaction => transaction.keyword === nftTokenId,
    );
    return !!exist;
  }

  return false;
};

export default useNFTAlreadyPurchased;
