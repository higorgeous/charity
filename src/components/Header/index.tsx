import Logo from './Logo';
import Menu from './Menu';
import Navigation from './Navigation';

import { Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation />
    <Menu />
  </Wrapper>
);

export default Header;
