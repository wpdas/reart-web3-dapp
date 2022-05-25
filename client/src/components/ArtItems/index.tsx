import React from 'react';
import { GifData } from '@app/hooks/useFetchGifItems';
import ItemCard from './ItemCard';
import {
  CardsContainer,
  Container,
  Content,
  Title,
  TitleSmall,
  TitleWrapper,
} from './styles';

type Props = {
  arts: GifData[];
};

const ArtItems: React.FC<Props> = ({ arts }) => {
  const hasArts = arts.length > 0;

  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>Collection of NFTs</Title>
          <TitleSmall>({arts.length} NFTs)</TitleSmall>
        </TitleWrapper>

        <CardsContainer>
          {hasArts &&
            arts
              // .sort(
              //   (artA, artB) =>
              //     artB.importDatetime.getTime() - artA.importDatetime.getTime(),
              // )
              .map((art, index) => (
                <ItemCard index={index} key={art.id} {...art} />
              ))}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default ArtItems;
