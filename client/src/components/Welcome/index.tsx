import useTransactionContract from '@app/hooks/useTransactionContract';
import Button from '../Button';
import Loader from '../Loader';
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
} from './styled';

const Welcome = () => {
  const { loading, connectWallet, currentAccount } = useTransactionContract();

  return (
    <Container>
      <Content>
        <Left>
          <Title>
            Send Crypto <br /> across the world
          </Title>
          <Text>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </Text>
          {!currentAccount && (
            <>
              {loading ? (
                <Loader />
              ) : (
                <Button type="button" onClick={connectWallet}>
                  Connect Wallet
                </Button>
              )}
            </>
          )}
          <Grid>
            <GridContentTopLeft>Reliability</GridContentTopLeft>
            <GridContentTopCenter>Security</GridContentTopCenter>
            <GridContentTopRight>Ethereum</GridContentTopRight>
            <GridContentBottomLeft>Web 3.0</GridContentBottomLeft>
            <GridContentBottomCenter>Low fees</GridContentBottomCenter>
            <GridContentBottomRight>Blockchain</GridContentBottomRight>
          </Grid>
        </Left>
        <Right>
          <Card />
          <Form />
        </Right>
      </Content>
    </Container>
  );
};

export default Welcome;
