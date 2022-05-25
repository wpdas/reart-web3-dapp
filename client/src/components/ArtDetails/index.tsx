import { BsFillEyeFill } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import useEthToUsd from '@app/hooks/useEthToUsd';
import useFetchGifById from '@app/hooks/useFetchGifById';
import useTransactionContract from '@app/hooks/useTransactionContract';
import { contractAddress } from '@app/utils/constants';
import getFakePriceByDatetime from '@app/utils/getFakePriceByDatetime';
import shortenAddress from '@app/utils/shortenAddress';
import Button from '../Button';
import {
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
  InfoWrapper,
  InfoWrapperSlim,
  Left,
  Line,
  LineLargeMargin,
  Right,
} from './styles';

/**
 * TODO: Views, Mobile View
 */

const ArtDetails: React.FC = () => {
  const theme = useTheme();
  const { currentAccount } = useTransactionContract();
  const { id } = useParams<{ id: string }>();
  const { gifUrl, creator, datetime } = useFetchGifById(id);
  const price = getFakePriceByDatetime(datetime);
  const usdConversion = useEthToUsd(price); // TODO: use dynamic value

  const safeContractAddress = shortenAddress(contractAddress, 4);

  return (
    <Container>
      <Content>
        <Left>
          <Image src={gifUrl} alt="gif" />
        </Left>
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
              <Info>22 views</Info>
            </InfoWrapper>
          </InfoBox>

          <Line />

          <InfoBoxCol>
            <InfoWrapperSlim>
              <Info>
                <span>Contract Address:</span> {safeContractAddress}
              </Info>
            </InfoWrapperSlim>
            <InfoWrapperSlim>
              <Info>
                <span>Token ID:</span> {id}
              </Info>
            </InfoWrapperSlim>
            <InfoWrapperSlim>
              <Info>
                <span>Blockchain:</span> Ethereum
              </Info>
            </InfoWrapperSlim>
          </InfoBoxCol>

          <LineLargeMargin />

          <InfoBoxCol>
            <InfoWrapperSlim>
              <FaEthereum size={30} color={theme.color.pink} />
              <InfoLarge>{price}</InfoLarge>
              <Info>(${usdConversion})</Info>
            </InfoWrapperSlim>
          </InfoBoxCol>

          <ButtonWrapper>
            <Button disabled={!currentAccount}>Buy NFT</Button>
            {!currentAccount && (
              <ConnectInfo>You should connect before buying NFTs</ConnectInfo>
            )}
          </ButtonWrapper>
        </Right>
      </Content>
    </Container>
  );
};

export default ArtDetails;
