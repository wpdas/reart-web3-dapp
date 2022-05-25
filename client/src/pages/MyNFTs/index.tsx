import {
  Footer,
  Gradients,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from '@app/components';
import useTransactionContract from '@app/hooks/useTransactionContract';

const MyNFTs: React.FC = () => {
  const { currentAccount } = useTransactionContract();

  return (
    <Gradients.GradientBgTransactions>
      <Navbar />
      <Transactions />
      {!!currentAccount && <Footer />}
    </Gradients.GradientBgTransactions>
  );
};

export default MyNFTs;
