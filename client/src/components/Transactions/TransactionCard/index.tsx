import React from 'react';
import useFetchGif from '@app/hooks/useFetchGif';
import shortenAddress from '@app/utils/shortenAddress';
import {
  Amount,
  Anchor,
  Container,
  Content,
  Image,
  Message,
  Timestamp,
  TimestampWrapper,
  Wrapper,
} from './styles';

type Props = {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword?: string;
  amount: string;
  url: string;
};

const TransactionCard: React.FC<Props> = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetchGif(keyword);
  const shortenedAddressFrom = shortenAddress(addressFrom, 4);
  const shortenedAddressTo = shortenAddress(addressTo, 4);

  return (
    <Container>
      <Content>
        <Wrapper>
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

          <Amount>
            <span>Amount:</span> {amount} ETH
          </Amount>

          {message && (
            <>
              <br />
              <Message>Message: {message}</Message>
            </>
          )}

          <Image src={gifUrl || url} alt="gif" />

          <TimestampWrapper>
            <Timestamp>{timestamp}</Timestamp>
          </TimestampWrapper>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default TransactionCard;
