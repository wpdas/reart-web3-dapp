import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiCompass } from 'react-icons/bi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import logo from '@app/assets/images/reart-logo.svg';
import useTransactionContract from '@app/hooks/useTransactionContract';
import { navLinks } from '@app/utils/constants';
import {
  Image,
  Nav,
  ImageWrapper,
  List,
  ListItem,
  MobileMenu,
  ListMobile,
} from './styles';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { loading, currentAccount, connectWallet } = useTransactionContract();
  const history = useHistory();

  const onClickConnectHandler = () => {
    if (!currentAccount) {
      connectWallet();
    }
  };

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
    <Nav>
      <ImageWrapper>
        <Image src={logo} alt="logo" onClick={onClickLogoHandler} />
      </ImageWrapper>
      <List>
        {navLinks.map((link, index) => (
          <ListItem
            key={link.label + index}
            onClick={() => {
              onClickItemHandler(link.to, link.external);
            }}>
            {link.label}
          </ListItem>
        ))}
        <ListItem
          usePurpleBg={!!currentAccount}
          withBg
          bold
          onClick={onClickConnectHandler}>
          {loading ? <BiCompass /> : !!currentAccount ? 'Connected' : 'Connect'}
        </ListItem>
      </List>
      <MobileMenu>
        {toggleMenu ? (
          <AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
        ) : (
          <HiMenuAlt4 fontSize={28} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <ListMobile>
            <AiOutlineClose
              fontSize={28}
              onClick={() => setToggleMenu(false)}
            />
            {navLinks.map((link, index) => (
              <ListItem
                key={link.label + index}
                mobileNav
                onClick={() => {
                  onClickItemHandler(link.to, link.external);
                }}>
                {link.label}
              </ListItem>
            ))}
          </ListMobile>
        )}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
