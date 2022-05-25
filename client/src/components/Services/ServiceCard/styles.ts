import styled from '@emotion/styled';
import { roundedWhite } from '../../glassmorphisms';
import { H1, P, TitleWithGradient } from '../../Typography';

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 12px;
  margin: 8px;
  ${roundedWhite}
`;

type IconWrapperProps = {
  bgColor?: string;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 40px;
  height: 40px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'initial')};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

export const CardTitle = styled(H1)`
  margin-top: 8px;
  margin-bottom: 0;
`;

export const CardSubtitle = styled(P)`
  color: ${({ theme }) => theme.color.fontWhite};
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;

  /* @media only screen and (min-width: 768px) {
    width: 75%;
  } */
`;
