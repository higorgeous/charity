import Link from 'next/link';

import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

import { Wrapper } from './styles';

const Logo = () => (
  <Wrapper>
    <Link href="/" aria-label="Gorgeous Charity Token">
      <a>
        <Desktop />
      </a>
    </Link>
  </Wrapper>
);

export default Logo;
