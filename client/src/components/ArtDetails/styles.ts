import styled from '@emotion/styled';
import { H1, P } from '../Typography';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 16px;
  max-width: 1280px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 48px 16px;
  width: 100%;
  min-height: 540px;

  @media only screen and (min-width: 1020px) {
    flex-direction: row;
    padding: 80px;
  }
`;

export const Left = styled.div`
  min-width: 48%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  object-fit: cover;

  background: rgb(139, 40, 227);
  background: linear-gradient(
    180deg,
    rgba(139, 40, 227, 1) 0%,
    rgba(193, 133, 173, 1) 100%
  );
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 48%;
`;

export const ImageId = styled(H1)`
  font-size: 30px;
  font-weight: 700;
  margin-top: 0;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBoxCol = styled(InfoBox)`
  flex-direction: column;
  align-items: flex-start;

  & h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-right: 22px;
`;

export const InfoWrapperSlim = styled(InfoWrapper)`
  margin-top: 6px;
`;

export const Info = styled(H1)`
  margin-left: 8px;

  & a {
    color: ${({ theme }) => theme.color.fontWhite};
  }

  & span {
    font-weight: 700;
  }
`;

export const InfoLarge = styled(Info)`
  font-size: 30px !important;
  font-weight: 700;
  margin-top: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.25px;
  background-color: gray;
  margin-bottom: 22px;
`;

export const LineLargeMargin = styled(Line)`
  margin-top: 22px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const ConnectInfo = styled(P)`
  margin: 0;
  background-color: ${({ theme }) => theme.color.purple};
  padding: 8px 20px;
  border-radius: 100px;
  text-align: center;
  font-weight: 600;
`;
