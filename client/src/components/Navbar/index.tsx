import { useState } from 'react';
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
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
  Content,
  SafeMargin,
} from './styles';

const ETH_VISIBLE_KEY = 'eth_visible';

const Navbar = () => {
  const ethVisible = localStorage.getItem(ETH_VISIBLE_KEY) || '0';
  const [showEthAvailable, setShowEthAvailable] = useState(ethVisible === '1');
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

  const changeEthVisibility = () => {
    setShowEthAvailable(!showEthAvailable);
    localStorage.setItem(ETH_VISIBLE_KEY, !showEthAvailable ? '1' : '0');
  };

  return (
    <>
      <Nav>
        <Content>
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

            {!!currentAccount ? (
              <ListItem usePurpleBg withBg bold onClick={changeEthVisibility}>
                {loading ? (
                  <BiCompass />
                ) : (
                  <span>
                    {showEthAvailable ? (
                      <>
                        <AiFillEye size={18} /> ETH: 0.0260
                      </>
                    ) : (
                      <>
                        <AiFillEyeInvisible size={18} /> ETH: -----
                      </>
                    )}
                  </span>
                )}
              </ListItem>
            ) : (
              <ListItem
                usePurpleBg={!!currentAccount}
                withBg
                bold
                onClick={onClickConnectHandler}>
                {loading ? <BiCompass /> : 'Connect'}
              </ListItem>
            )}
          </List>
          <MobileMenu>
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                onClick={() => setToggleMenu(false)}
              />
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
        </Content>
      </Nav>
      <SafeMargin />
    </>
  );
};

export default Navbar;
