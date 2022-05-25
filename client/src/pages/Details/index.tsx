import { Footer, Gradients, Navbar } from '@app/components';
import ArtDetails from '@app/components/ArtDetails';

const Details: React.FC = () => {
  return (
    <div>
      <Gradients.GradientBgWelcome>
        <Navbar />
        <ArtDetails />
        <Footer />
      </Gradients.GradientBgWelcome>
    </div>
  );
};

export default Details;
