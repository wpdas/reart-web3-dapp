import React from 'react';
import { BsFillPlayCircleFill, BsFillDiagram3Fill } from 'react-icons/bs';
import useTransactionContract from '@app/hooks/useTransactionContract';
import Button from '../Button';
import Loader from '../Loader';
import { H1 } from '../Typography';
import Card from './Card';
import Form from './Form';
import {
  Container,
  Content,
  Left,
  Right,
  Grid,
  GridContentBottomLeft,
  GridContentTopCenter,
  GridContentTopLeft,
  GridContentTopRight,
  GridContentBottomRight,
  Text,
  Title,
  GridContentBottomCenter,
  ButtonWrapper,
  LoaderWrapper,
} from './styled';

type Props = {
  hideForm?: boolean;
};

const Welcome: React.FC<Props> = ({ hideForm }) => {
  const { loading, connectWallet, currentAccount } = useTransactionContract();

  return (
    <Container>
      <Content lgAlignCenter={hideForm}>
        <Left>
          <Title>
            Buy NFTs <br /> across the world
          </Title>
          <Text>
            Explore the crypto world. Buy and sell NFTs easily on Reart. Your
            account is based on your Wallet.
          </Text>
          {loading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <ButtonWrapper>
              <Button
                type="button"
                disabled={!!currentAccount}
                useDisabledPurpleBg={!!currentAccount}
                onClick={connectWallet}>
                {!currentAccount ? (
                  <BsFillPlayCircleFill />
                ) : (
                  <BsFillDiagram3Fill />
                )}
                {!!currentAccount ? 'Connected' : 'Connect Wallet'}
              </Button>
            </ButtonWrapper>
          )}
          <Grid>
            <GridContentTopLeft>Reliability</GridContentTopLeft>
            <GridContentTopCenter>Security</GridContentTopCenter>
            <GridContentTopRight>Ethereum</GridContentTopRight>
            <GridContentBottomLeft>Web 3.0</GridContentBottomLeft>
            <GridContentBottomCenter>Goerli Network</GridContentBottomCenter>
            <GridContentBottomRight>Blockchain</GridContentBottomRight>
          </Grid>
        </Left>
        <Right>
          {hideForm && <H1>Digital Card</H1>}
          <Card />
          {!hideForm && <Form />}
        </Right>
      </Content>
    </Container>
  );
};

export default Welcome;
