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
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Home;
