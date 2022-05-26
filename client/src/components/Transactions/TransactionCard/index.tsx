import React from 'react';
import { BsCoin } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import useFetchGifById from '@app/hooks/useFetchGifById';
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
  const history = useHistory();
  const { gifUrl, title } = useFetchGifById(keyword);

  if (!gifUrl) return null;

  const shortenedAddressFrom = shortenAddress(addressFrom, 4);
  const shortenedAddressTo = shortenAddress(addressTo, 4);
  const shortenedMessage = shortenMessage(message, 20);

  const clickItemHandler = () => {
    history.push(`/my-nft/${keyword}`);
  };

  return (
    <Container onClick={clickItemHandler}>
      <Content>
        <Wrapper>
          <Image src={gifUrl} alt="gif" />

          <ImageInfo>
            <Keyword>{title ? `${title} #${id}` : 'PsychoMolly #8746'}</Keyword>

            <AmountWrapper>
              <BsCoin size={20} color={theme.color.fontDark} />
              <Amount>{amount} ETH</Amount>
            </AmountWrapper>

            <Anchor
              href={`https://goerli.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noopener noreferrer">
              <span>From:</span> {shortenedAddressFrom}
            </Anchor>

            <Anchor
              href={`https://goerli.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noopener noreferrer">
              <span>To:</span> {shortenedAddressTo}
            </Anchor>

            {message && (
              <Message>
                <span>Description:</span> {shortenedMessage}
              </Message>
            )}

            <Timestamp>
              <span>Purchase date:</span> {timestamp}
            </Timestamp>
          </ImageInfo>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default TransactionCard;
