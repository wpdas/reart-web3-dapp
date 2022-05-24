import React from 'react';
import { BsCoin } from 'react-icons/bs';
import { useTheme } from '@emotion/react';
import useFetchGif from '@app/hooks/useFetchGif';
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

type Props = {
  id: number;
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword?: string;
  amount: number;
  url?: string;
};

const TransactionCard: React.FC<Props> = ({
  id,
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const theme = useTheme();
  const gifUrl = useFetchGif(keyword);

  const shortenedAddressFrom = shortenAddress(addressFrom, 4);
  const shortenedAddressTo = shortenAddress(addressTo, 4);
  const shortenedMessage = shortenMessage(message);
  const dummyImageUrlForNotFoundCases =
    dummyData[id - Math.floor(id / dummyData.length)].url;

  return (
    <Container>
      <Content>
        <Wrapper>
          <Image
            src={gifUrl || url || dummyImageUrlForNotFoundCases}
            alt="gif"
          />

          <ImageInfo>
            <Keyword>
              {keyword ? `${keyword} #${id}` : 'PsychoMolly #8746'}
            </Keyword>

            <AmountWrapper>
              <BsCoin size={20} color={theme.color.fontDark} />
              <Amount>{amount} ETH</Amount>
            </AmountWrapper>

            <Anchor
              href={`https://ropsten.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noopener noreferrer">
              <span>From:</span> {shortenedAddressFrom}
            </Anchor>

            <Anchor
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noopener noreferrer">
              <span>To:</span> {shortenedAddressTo}
            </Anchor>

            {message && (
              <Message>
                <span>Message:</span> {shortenedMessage}
              </Message>
            )}

            <Timestamp>
              <span>Timestamp:</span> {timestamp}
            </Timestamp>
          </ImageInfo>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default TransactionCard;
