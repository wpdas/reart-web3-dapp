import React from 'react';
import { BsCoin } from 'react-icons/bs';
import { useTheme } from '@emotion/react';
import useFetchGif from '@app/hooks/useFetchGif';
import { GifData } from '@app/hooks/useFetchGifItems';
import dummyData from '@app/utils/dummyData';
import shortenAddress from '@app/utils/shortenAddress';
import shortenMessage from '@app/utils/shortenMessage';
import {
  Amount,
  AmountWrapper,
  Anchor,
  Container,
  Content,
  Image,
  ImageInfo,
  Keyword,
  Message,
  Timestamp,
  Wrapper,
} from './styles';

type Props = GifData;

const ItemCard: React.FC<Props> = ({
  id,
  title,
  description,
  importDatetime,
  url,
}) => {
  const theme = useTheme();
  const fakePriceByDatetime = importDatetime.getTime().toString();
  const value = fakePriceByDatetime.slice(
    fakePriceByDatetime.length - 2,
    fakePriceByDatetime.length,
  );

  return (
    <Container>
      <Content>
        <Wrapper>
          <Image src={url} alt="gif" />

          <ImageInfo>
            <Keyword>{title}</Keyword>

            <AmountWrapper>
              <BsCoin size={20} color={theme.color.fontDark} />
              <Amount>{value} ETH</Amount>
            </AmountWrapper>

            <Message>
              <span>Description:</span> {description}
            </Message>

            <Timestamp>
              <span>Created at:</span> {importDatetime.toLocaleString()}
            </Timestamp>
          </ImageInfo>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ItemCard;
