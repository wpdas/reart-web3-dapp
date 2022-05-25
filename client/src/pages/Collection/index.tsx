import { Footer, Gradients, Navbar, ArtItems } from '@app/components';
import useFetchGifItems from '@app/hooks/useFetchGifItems';
import useNFTCollectionInfo from '@app/hooks/useNFTCollectionInfo';

const Collection: React.FC = () => {
  const NFTsCollection = useNFTCollectionInfo('collection');
  const gifs = useFetchGifItems(NFTsCollection);

  return (
    <div>
      <Gradients.GradientBgTransactions>
        <Navbar />
        {gifs && <ArtItems arts={gifs} />}
      </Gradients.GradientBgTransactions>
      {gifs && (
        <Gradients.GradientBgFooter>
          <Footer />
        </Gradients.GradientBgFooter>
      )}
    </div>
  );
};

export default Collection;
