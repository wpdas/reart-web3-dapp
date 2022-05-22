import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import logo from '@app/assets/images/logo.png';
import {
  Image,
  Nav,
  ImageWrapper,
  List,
  ListItem,
  MobileMenu,
  ListMobile,
} from './styles';

const items = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Nav>
      <ImageWrapper>
        <Image src={logo} alt="logo" />
      </ImageWrapper>
      <List>
        {items.map((item, index) => (
          <ListItem key={item + index}>{item}</ListItem>
        ))}
        <ListItem withBg>Login</ListItem>
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
            {items.map((item, index) => (
              <ListItem key={item + index} mobileNav>
                {item}
              </ListItem>
            ))}
          </ListMobile>
        )}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
