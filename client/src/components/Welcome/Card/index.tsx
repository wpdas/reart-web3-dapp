import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import { useTheme } from '@emotion/react';
import {
  CardBody,
  CardContent,
  CardRow,
  IconWrapper,
  CardText,
  CardTextSemiBold,
} from './styled';

type CardProps = {
  address: string;
};

const Card: React.FC<CardProps> = ({ address }) => {
  const theme = useTheme();

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
          <CardText>{address}</CardText>
          <CardTextSemiBold>Ethereum</CardTextSemiBold>
        </div>
      </CardContent>
    </CardBody>
  );
};

export default Card;
