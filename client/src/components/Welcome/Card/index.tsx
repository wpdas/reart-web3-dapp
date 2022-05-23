import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import { useTheme } from '@emotion/react';
import useTransactionContract from '@app/hooks/useTransactionContract';
import shortenAddress from '@app/utils/shortenAddress';
import {
  CardBody,
  CardContent,
  CardRow,
  IconWrapper,
  CardText,
  CardTextSemiBold,
} from './styled';

const Card = () => {
  const theme = useTheme();
  const { currentAccount } = useTransactionContract();
  const address = shortenAddress(currentAccount || '');

  return (
    <CardBody>
      <CardContent>
        <CardRow>
          <IconWrapper>
            <SiEthereum fontSize={21} color={theme.color.white} />
          </IconWrapper>
          <BsInfoCircle fontSize={17} color={theme.color.white} />
        </CardRow>

        <div>
          <CardText>{address || 'Address'}</CardText>
          <CardTextSemiBold>Ethereum</CardTextSemiBold>
        </div>
      </CardContent>
    </CardBody>
  );
};

export default Card;
