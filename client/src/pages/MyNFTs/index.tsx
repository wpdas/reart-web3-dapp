import { Footer, Gradients, Transactions } from '@app/components';
import useTransactionContract from '@app/hooks/useTransactionContract';

const MyNFTs: React.FC = () => {
  const { currentAccount } = useTransactionContract();

  return (
    <Gradients.GradientBgTransactions>
      <Transactions />
      {!!currentAccount && <Footer />}
    </Gradients.GradientBgTransactions>
  );
};

export default MyNFTs;
