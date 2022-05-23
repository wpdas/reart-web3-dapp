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
  cursor: pointer;
  ${roundedWhite}

  & :hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
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
