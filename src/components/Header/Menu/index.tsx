import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle'

import { Wrapper } from './styles';

const Menu = () => {

  return (
    <Wrapper>
      <ThemeToggle />
      <Hamburger />
    </Wrapper>
  );
};

export default Menu;