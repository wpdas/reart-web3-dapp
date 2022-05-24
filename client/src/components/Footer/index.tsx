import logo from '@app/assets/images/logo.png';
import {
  ContactInfo,
  Container,
  Content,
  Copyright,
  InfoParagraph,
  Line,
  Logo,
  LogoWrapper,
  Menu,
  MenuLink,
} from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" />
        </LogoWrapper>

        <Menu>
          <MenuLink>Market</MenuLink>
          <MenuLink>Exchange</MenuLink>
          <MenuLink>Tutorials</MenuLink>
          <MenuLink>Wallets</MenuLink>
        </Menu>
      </Content>

      <ContactInfo>
        <InfoParagraph>Get in contact</InfoParagraph>
        <InfoParagraph>wendersonpdas@gmail.com</InfoParagraph>
      </ContactInfo>

      <Line />

      <Copyright>
        <InfoParagraph>@wendersonpdas {currentYear}</InfoParagraph>
        <InfoParagraph>All rights reserverd</InfoParagraph>
      </Copyright>
    </Container>
  );
};

export default Footer;
