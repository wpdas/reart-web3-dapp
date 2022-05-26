import styled from '@emotion/styled';
import { H2 } from '../Typography';

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
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled(H2)`
  margin: 8px 0;
  display: flex;
  text-align: center;

  @media only screen and (min-width: 1020px) {
    text-align: left;
  }
`;

export const TitleSmall = styled(H2)`
  font-size: 16px;
  margin-left: 12px;
  margin: 8px 0 8px 12px;
  display: flex;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
