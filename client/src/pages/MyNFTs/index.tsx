import {
  Footer,
  Gradients,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from '@app/components';

const MyNFTs: React.FC = () => {
  return (
    <div>
      <Gradients.GradientBgTransactions>
        <Navbar />
        <Transactions />
      </Gradients.GradientBgTransactions>
      <Gradients.GradientBgFooter>
        <Footer />
      </Gradients.GradientBgFooter>
    </div>
  );
};

export default MyNFTs;
