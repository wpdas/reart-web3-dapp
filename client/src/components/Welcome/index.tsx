import React from 'react';
import { BsFillPlayCircleFill, BsFillDiagram3Fill } from 'react-icons/bs';
import alchemy from '@app/assets/images/alchemy.png';
import hardhat from '@app/assets/images/hardhat.webp';
import metamask from '@app/assets/images/metamask.webp';
import reactImage from '@app/assets/images/react.png';
import solidity from '@app/assets/images/solidity.png';
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
  TechBox,
  TechImage,
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
            Explore this Demo DApp developed using Solidity, Hardhat, Alchemy,
            Ethers.js and React. Create an account on <span>MetaMask</span> and
            use the <span>Goerli Test Network</span>. Then, get some testnet
            Ether (ETH) through the{' '}
            <a href="https://goerlifaucet.com/" target="_blank">
              Goerli Faucet
            </a>{' '}
            website. Enjoy!
          </Text>

          <TechBox>
            <TechImage src={solidity} />
            <TechImage src={hardhat} />
            <TechImage src={alchemy} />
            <TechImage src={metamask} />
            <TechImage src={reactImage} />
          </TechBox>

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
