import styled from '@emotion/styled';
import { TitleWithGradient } from '../Typography';

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
  justify-content: space-between;
  padding: 48px 16px;
  width: 100%;

  @media only screen and (min-width: 1020px) {
    flex-direction: row;
    padding: 80px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;

  @media only screen and (min-width: 1020px) {
    max-width: 45%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const Title = styled(TitleWithGradient)``;

export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media only screen and (min-width: 1020px) {
    max-width: 45%;
  }
`;
