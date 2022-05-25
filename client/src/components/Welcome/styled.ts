import styled from '@emotion/styled';
import { TitleGradient } from '../Gradients';
import { TitleWithGradient } from '../Typography';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  max-width: 1280px;
  margin: auto;
`;

type ContentProps = {
  lgAlignCenter?: boolean;
};

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 16px;
  width: 100%;

  @media only screen and (min-width: 1020px) {
    flex-direction: row;
    align-items: ${({ lgAlignCenter }) =>
      lgAlignCenter ? 'center' : 'flex-start'};
    padding: 80px;
    ${({ lgAlignCenter }) => lgAlignCenter && 'padding-bottom: 128px;'};
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

export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 40px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: fit-content;
  }

  @media only screen and (min-width: 1020px) {
    margin-top: 0;
  }
`;

export const Title = styled(TitleWithGradient)``;

export const Text = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.color.fontWhite};
  font-weight: 300;
  width: 91.66%;
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.regularFont};

  @media only screen and (min-width: 1020px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

// Grid

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 40px;

  @media only screen and (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const GridContentTopCenter = styled.div`
  display: flex;
  min-height: 70px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  border: solid 1px rgb(156 163 175);
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  border-top-right-radius: 16px;

  @media only screen and (min-width: 640px) {
    padding: 0;
    min-width: 120px;
    border-top-right-radius: 0;
  }
`;

export const GridContentTopLeft = styled(GridContentTopCenter)`
  border-top-left-radius: 16px;
  border-top-right-radius: 0;

  @media only screen and (min-width: 640px) {
    border-top-left-radius: 16px;
  }
`;

export const GridContentTopRight = styled(GridContentTopCenter)`
  border-top-right-radius: 0;

  @media only screen and (min-width: 640px) {
    border-top-right-radius: 16px;
  }
`;

export const GridContentBottomLeft = styled(GridContentTopCenter)`
  border-top-right-radius: 0;

  @media only screen and (min-width: 640px) {
    border-bottom-left-radius: 16px;
  }
`;

export const GridContentBottomCenter = styled(GridContentTopCenter)`
  border-top-right-radius: 0;
  border-bottom-left-radius: 16px;

  @media only screen and (min-width: 640px) {
    border-bottom-left-radius: 0;
  }
`;

export const GridContentBottomRight = styled(GridContentTopCenter)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 16px;
`;

export const ButtonWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 220px;
  }
`;

export const LoaderWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 220px;
    margin-bottom: 6px;
  }
`;
