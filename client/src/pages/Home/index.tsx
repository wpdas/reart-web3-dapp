import {
  Footer,
  Gradients,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from '@app/components';

const Home: React.FC = () => {
  return (
    <div>
      <Gradients.GradientBgWelcome>
        <Navbar />
        <Welcome />
      </Gradients.GradientBgWelcome>
      <Gradients.GradientBgServices>
        <Services />
      </Gradients.GradientBgServices>
      <Gradients.GradientBgTransactions>
        <Transactions />
      </Gradients.GradientBgTransactions>
      <Gradients.GradientBgFooter>
        <Footer />
      </Gradients.GradientBgFooter>
    </div>
  );
};

export default Home;
