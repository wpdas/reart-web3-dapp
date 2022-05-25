import { useHistory } from 'react-router-dom';
import logo from '@app/assets/images/reart-logo.svg';
import { navLinks } from '@app/utils/constants';
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
  const history = useHistory();
  const currentYear = new Date().getFullYear();

  const onClickLogoHandler = () => {
    history.push('/');
  };

  const onClickItemHandler = (to: string, isExternal: boolean) => {
    if (!isExternal) {
      return history.push(to);
    }

    window.open(to, '_blank');
  };

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" onClick={onClickLogoHandler} />
        </LogoWrapper>

        <Menu>
          {navLinks.map((link, index) => (
            <MenuLink
              key={index}
              onClick={() => {
                onClickItemHandler(link.to, link.external);
              }}>
              {link.label}
            </MenuLink>
          ))}
        </Menu>
      </Content>

      <ContactInfo>
        <InfoParagraph>Get in contact</InfoParagraph>
        <InfoParagraph>wendersonpdas@gmail.com</InfoParagraph>
      </ContactInfo>

      <Line />

      <Copyright>
        <InfoParagraph>IG: @wendersonpdas</InfoParagraph>
        <InfoParagraph>All rights reserverd - {currentYear}</InfoParagraph>
      </Copyright>
    </Container>
  );
};

export default Footer;
