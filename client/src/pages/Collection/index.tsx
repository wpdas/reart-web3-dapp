import { Footer, Gradients, Navbar, ArtItems } from '@app/components';
import useFetchGifItems from '@app/hooks/useFetchGifItems';

const Collection: React.FC = () => {
  const gifs = useFetchGifItems([
    {
      query: 'mental@seizetheawkward',
      limit: 12,
    },
    {
      query: '@corgiyolk',
      limit: 8,
    },
    {
      query: '@xdelacra',
      limit: 8,
    },
  ]);

  return (
    <div>
      <Gradients.GradientBgTransactions>
        <Navbar />
        {gifs && <ArtItems arts={gifs} />}
      </Gradients.GradientBgTransactions>
      <Gradients.GradientBgFooter>
        <Footer />
      </Gradients.GradientBgFooter>
    </div>
  );
};

export default Collection;
