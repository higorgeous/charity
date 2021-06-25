import Link from 'next/link';

import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

import { Wrapper } from './styles';

const Logo = () => (
  <Wrapper>
    <span className="desktop">
      <Link href="/" aria-label="Gorgeous Charity Token">
        <a>
          <Desktop />
        </a>
      </Link>
    </span>
    <span className="tablet">
      <Link href="/" aria-label="Gorgeous Charity Token">
        <a>
          <Tablet />
        </a>
      </Link>
    </span>
    <span className="mobile">
      <Link href="/" aria-label="Gorgeous Charity Token">
        <a>
          <Mobile />
        </a>
      </Link>
    </span>
  </Wrapper>
);

export default Logo;
