import React from 'react';
import { BsCoin } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import useEthToUsd from '@app/hooks/useEthToUsd';
import { GifData } from '@app/hooks/useFetchGifItems';
import useNFTViewInfo from '@app/hooks/useNFTViewInfo';
import getFakePriceByDatetime from '@app/utils/getFakePriceByDatetime';
import {
  Amount,
  AmountWrapper,
  Box,
  Container,
  Content,
  Creator,
  Image,
  ImageInfo,
  Keyword,
  Message,
  ViewsWrapper,
  Wrapper,
} from './styles';

type Props = GifData & { index?: number };

const ItemCard: React.FC<Props> = ({
  id,
  index,
  title,
  description,
  importDatetime,
  creator,
  url,
}) => {
  const history = useHistory();
  const theme = useTheme();
  const { views } = useNFTViewInfo(id);

  const price = getFakePriceByDatetime(importDatetime);
  const usdConversion = useEthToUsd(price);

  const clickItemHandler = () => {
    history.push(`/details/${id}`);
  };

  return (
    <Container onClick={clickItemHandler}>
      <Content>
        <Wrapper>
          <Image src={url} alt="gif" />

          <ImageInfo>
            <Keyword>
              {title} #{index}
            </Keyword>

            <Box>
              <ViewsWrapper>
                <BsFillEyeFill size={20} color={theme.color.fontDark} />
                <Amount>{views} views</Amount>
              </ViewsWrapper>
              <AmountWrapper>
                <FaEthereum size={20} color={theme.color.fontDark} />
                <Amount>{price} ETH</Amount>
              </AmountWrapper>

              <AmountWrapper>
                <BsCoin size={20} color={theme.color.fontDark} />
                <Amount>${usdConversion}</Amount>
              </AmountWrapper>
            </Box>

            <Creator>
              <span>Creator:</span> @{creator}
            </Creator>

            <Message>
              <span>Description:</span> {description}
            </Message>
          </ImageInfo>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ItemCard;
