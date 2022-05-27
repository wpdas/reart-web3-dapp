import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  max-width: 1280px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
  width: 100%;

  @media only screen and (min-width: 932px) {
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  cursor: pointer;

  @media only screen and (min-width: 932px) {
    margin-right: 128px;
  }
`;

export const Logo = styled.img`
  width: 146px;
`;

export const Menu = styled.div`
  display: none;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 932px) {
    display: flex;
  }
`;

export const MenuLink = styled.p`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0 8px;
  cursor: pointer;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const InfoParagraph = styled.p`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.25px;
  background-color: gray;
  margin-top: 20px;
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
