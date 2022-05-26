import styled from '@emotion/styled';
import * as glassmorphisms from '../glassmorphisms';

export const SafeMargin = styled.div`
  width: 100%;
  height: 52px;

  @media only screen and (min-width: 956px) {
    height: 92px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  background-color: #000000;
  z-index: 99;

  @media only screen and (min-width: 956px) {
    padding-top: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: auto;
  padding: 9px 32px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 956px) {
    flex: 0.5;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 146px;
  padding-top: 6px;
  cursor: pointer;

  @media only screen and (min-width: 956px) {
    padding-top: 0;
  }
`;

type ListProps = {
  mobileNav?: boolean;
};

export const List = styled.ul<ListProps>`
  display: ${({ mobileNav }) => (mobileNav ? 'flex' : 'none')};
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.fontWhite};
  margin: 0;

  @media only screen and (min-width: 956px) {
    flex-direction: row;
    display: flex;
  }
`;

export const ListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  z-index: 10;
  position: fixed;
  width: 300px;
  height: 100vh;
  list-style: none;
  top: -16px;
  right: 0;
  padding: 20px 12px;

  ${glassmorphisms.blue()}

  & svg {
    align-self: flex-start;
  }

  @media only screen and (min-width: 956px) {
    display: none;
  }
`;

type ListItemProps = {
  withBg?: boolean;
  mobileNav?: boolean;
  bold?: boolean;
  usePurpleBg?: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  color: ${({ theme }) => theme.color.fontWhite};

  ${({ withBg, theme, usePurpleBg }) =>
    withBg &&
    `
    background-color: ${usePurpleBg ? theme.color.purple : theme.color.blue};
    padding: 8px 28px;
    border-radius: 100px;
  `}

  ${({ mobileNav }) =>
    mobileNav &&
    `
    margin: 8px 0;
    font-size: 18px;
    line-height: 28px;
  `}

  font-family: ${({ theme }) => theme.font.regularFont};
  margin: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, withBg, usePurpleBg }) =>
      withBg && !usePurpleBg && theme.color.darkBlue};
  }

  &:last-child {
    ${({ mobileNav }) => !mobileNav && 'margin-right: 0'};
  }

  ${({ bold }) => bold && 'font-weight: 600;'};

  & span {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 6px;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  position: relative;

  @media only screen and (min-width: 956px) {
    display: none;
  }

  & svg {
    color: ${({ theme }) => theme.color.fontWhite};
    cursor: pointer;

    @media only screen and (min-width: 956px) {
      flex-direction: row;
      display: none;
    }
  }
`;
