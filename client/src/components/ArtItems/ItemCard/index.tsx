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

type Props = GifData & { index?: number };

const ItemCard: React.FC<Props> = ({
  id,
  index,
  title,
  description,
  importDatetime,
  url,
}) => {
  const theme = useTheme();
  const fakePriceByDatetime = importDatetime.getTime().toString();
  const value = fakePriceByDatetime.slice(
    fakePriceByDatetime.length - 5,
    fakePriceByDatetime.length - 3,
  );

  const safePrice = value === '00' ? 0.0015 : Number(`0.00${value}`);

  return (
    <Container>
      <Content>
        <Wrapper>
          <Image src={url} alt="gif" />

          <ImageInfo>
            <Keyword>
              {title} #{index}
            </Keyword>

            <AmountWrapper>
              <BsCoin size={20} color={theme.color.fontDark} />
              <Amount>{safePrice} ETH</Amount>
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
