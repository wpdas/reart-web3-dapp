import styled from '@emotion/styled';
import { TitleGradient } from './Gradients';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
`;

export const H3 = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.color.fontBlack};
  font-family: ${({ theme }) => theme.font.regularFont};
  line-height: 24px;
`;

export const TitleWithGradient = styled(TitleGradient)`
  font-size: 30px;
  line-height: 36px;
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-weight: 400;
  padding: 4px 0;
  margin-bottom: 20px;
  /* text-align: center; */

  @media only screen and (min-width: 640px) {
    font-size: 48px;
    line-height: 1;
  }

  @media only screen and (min-width: 1020px) {
    /* text-align: left; */
  }
`;

export const P = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  line-height: 24px;
`;
