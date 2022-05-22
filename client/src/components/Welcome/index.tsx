import Button from '../Button';
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
  const connectWallet = () => {};

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
          <Button type="button" onClick={connectWallet}>
            Connect Wallet
          </Button>
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
          <Card address="Address" />
          <Form />
        </Right>
      </Content>
    </Container>
  );
};

export default Welcome;
