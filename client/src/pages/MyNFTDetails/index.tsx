import { Footer, Gradients } from '@app/components';
import ArtDetails from '@app/components/ArtDetails';

const MyNFTDetails: React.FC = () => {
  return (
    <div>
      <Gradients.GradientBgWelcome>
        <ArtDetails isOwner />
        <Footer />
      </Gradients.GradientBgWelcome>
    </div>
  );
};

export default MyNFTDetails;
