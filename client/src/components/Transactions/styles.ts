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

  @media only screen and (min-width: 1020px) {
    padding: 0 80px 80px;
  }
`;

export const Title = styled(H2)`
  margin: 8px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
