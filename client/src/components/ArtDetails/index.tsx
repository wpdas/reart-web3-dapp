/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import GlobalPortal from '@app/containers/GlobalPortal';
import useEthToUsd from '@app/hooks/useEthToUsd';
import useFetchGifById from '@app/hooks/useFetchGifById';
import useNFTAlreadyPurchased from '@app/hooks/useNFTAlreadyPurchased';
import useNFTViewInfo from '@app/hooks/useNFTViewInfo';
import useTransactionContract from '@app/hooks/useTransactionContract';
import useTransactionDetails from '@app/hooks/useTransactionDetails';
import { contractAddress } from '@app/utils/constants';
import getFakePriceByDatetime from '@app/utils/getFakePriceByDatetime';
import shortenAddress from '@app/utils/shortenAddress';
import Button from '../Button';
import Loader from '../Loader';
import SimpleMessage from '../Modals/SimpleMessage';
import {
  Anchor,
  ButtonWrapper,
  ConnectInfo,
  Container,
  Content,
  Image,
  ImageId,
  Info,
  InfoBox,
  InfoBoxCol,
  InfoLarge,
  InfoLineBreak,
  InfoWrapper,
  InfoWrapperSlim,
  Left,
  Line,
  LineLargeMargin,
  Right,
} from './styles';

const InfoText: React.FC<{ children: ReactNode; lineBreak?: boolean }> = ({
  children,
  lineBreak,
}) => (
  <InfoWrapperSlim>
    {lineBreak ? (
      <InfoLineBreak>{children}</InfoLineBreak>
    ) : (
      <Info>{children}</Info>
    )}
  </InfoWrapperSlim>
);

type ArtDetailsProps = {
  isOwner?: boolean;
};

const ArtDetails: React.FC<ArtDetailsProps> = ({ isOwner }) => {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const history = useHistory();
  const { currentAccount, processingTransaction, buyNFTTransaction } =
    useTransactionContract();
  const { id } = useParams<{ id: string }>();
  const { gifUrl, creator, datetime, description, hasError, status } =
    useFetchGifById(id);
  const { views, notifyNewView } = useNFTViewInfo(id);
  const alreadyPurchased = useNFTAlreadyPurchased(id);

  // Owner only
  const { transaction: ownerTransactionDetails, ready: transactionReady } =
    useTransactionDetails(id);

  const price = getFakePriceByDatetime(datetime);
  const usdConversion = useEthToUsd(price);
  const safeContractAddress = shortenAddress(contractAddress, 4);

  // Send the user back in case he doesn't own this NFT and isOwner param is true
  useEffect(() => {
    if (transactionReady) {
      if (!ownerTransactionDetails?.addressFrom && isOwner) {
        history.goBack();
      }
    }
  }, [ownerTransactionDetails, transactionReady]);

  useEffect(() => {
    if (!hasError && status === 'ready' && !isOwner) {
      notifyNewView();
    }
  }, [hasError, status]);

  const seeCollectionClickHandler = () => {
    history.push('/collection');
  };

  const seeMyNFTsClickHandler = () => {
    history.push('/my-nfts');
  };

  const buyNFTHandler = () => {
    buyNFTTransaction({ id, amount: price, desc: description }).then(() => {
      setShowModal(true);
    });
  };

  return (
    <Container>
      <Content>
        <Left>{gifUrl && <Image src={gifUrl} alt="gif" />}</Left>
        <Right>
          <ImageId>#{id}</ImageId>
          <InfoBox>
            <InfoWrapper>
              <Info>
                Owned by{' '}
                <a href={`https://giphy.com/${creator}`} target="_blank">
                  @{creator}
                </a>
              </Info>
            </InfoWrapper>
            <InfoWrapper>
              <BsFillEyeFill size={20} color={theme.color.white} />
              <Info>{views} views</Info>
            </InfoWrapper>
          </InfoBox>

          <Line />

          {isOwner ? (
            <InfoBoxCol>
              <InfoText lineBreak>
                <Anchor
                  href={`https://goerli.etherscan.io/address/${ownerTransactionDetails?.addressFrom}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>From:</span> {ownerTransactionDetails?.addressFrom}
                </Anchor>
              </InfoText>
              <InfoText lineBreak>
                <Anchor
                  href={`https://goerli.etherscan.io/address/${ownerTransactionDetails?.addressTo}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>To:</span> {ownerTransactionDetails?.addressTo}
                </Anchor>
              </InfoText>
              <InfoText>
                <span>Message:</span> {ownerTransactionDetails?.message}
              </InfoText>
              <InfoText>
                <span>Purchase date:</span>{' '}
                {ownerTransactionDetails?.timestampDate.toLocaleString()}
              </InfoText>
              <InfoText>
                <span>Blockchain:</span> Ethereum
              </InfoText>
            </InfoBoxCol>
          ) : (
            <InfoBoxCol>
              <InfoText>
                <span>Contract Address:</span> {safeContractAddress}
              </InfoText>
              <InfoText>
                <span>Token ID:</span> {id}
              </InfoText>
              <InfoText>
                <span>Blockchain:</span> Ethereum
              </InfoText>
            </InfoBoxCol>
          )}

          <LineLargeMargin />

          <InfoBoxCol>
            <InfoWrapperSlim>
              <FaEthereum size={30} color={theme.color.pink} />
              {isOwner ? (
                <InfoLarge>{ownerTransactionDetails?.amount}</InfoLarge>
              ) : (
                <InfoLarge>{price}</InfoLarge>
              )}
              <Info>(${usdConversion})</Info>
            </InfoWrapperSlim>
          </InfoBoxCol>

          {!isOwner ? (
            <ButtonWrapper>
              {processingTransaction ? (
                <Loader />
              ) : (
                <>
                  <Button
                    onClick={buyNFTHandler}
                    disabled={!currentAccount || alreadyPurchased}>
                    Buy NFT
                  </Button>
                  {!currentAccount && (
                    <ConnectInfo>
                      You should connect before buying NFTs
                    </ConnectInfo>
                  )}
                  {alreadyPurchased && (
                    <ConnectInfo>You already own this NFT</ConnectInfo>
                  )}
                  <Button onClick={seeCollectionClickHandler}>
                    See Collection
                  </Button>
                </>
              )}
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <Button onClick={seeMyNFTsClickHandler}>See My NFTs</Button>
            </ButtonWrapper>
          )}
        </Right>
      </Content>

      {showModal && (
        <GlobalPortal>
          <SimpleMessage
            message="NFT successfully purchased"
            onConfirm={() => {
              history.push('/my-nfts');
            }}
          />
        </GlobalPortal>
      )}

      {hasError && (
        <GlobalPortal>
          <SimpleMessage
            message="The NFT you are trying to access doesn't exist"
            onConfirm={() => {
              history.push('/collection');
            }}
          />
        </GlobalPortal>
      )}
    </Container>
  );
};

export default ArtDetails;
