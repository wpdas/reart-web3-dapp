import React from 'react';
import { GifData } from '@app/hooks/useFetchGifItems';
import ItemCard from './ItemCard';
import { CardsContainer, Container, Content, Title } from './styles';

type Props = {
  arts: GifData[];
};

const ArtItems: React.FC<Props> = ({ arts }) => {
  const hasArts = arts.length > 0;

  return (
    <Container>
      <Content>
        <Title>
          Collection of NFTs <span>({arts.length} NFTs)</span>
        </Title>

        <CardsContainer>
          {hasArts &&
            arts
              .sort(
                (artA, artB) =>
                  artB.importDatetime.getTime() - artA.importDatetime.getTime(),
              )
              .map(art => <ItemCard key={art.id} {...art} />)}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default ArtItems;
