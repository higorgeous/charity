import Link from 'next/link';
import { FC } from 'react';

import { Left, Right, Web3Button, Wrapper } from './styles';

const Top: FC = () => {
  return (
    <Wrapper>
      <Left>
          <a
            href="https://www.higorgeous.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Making everyday, a Gorgeous day."
          >
            Making everyday, a Gorgeous day.
          </a>
      </Left>
      <Right>
        <Link href="/charity">
          <a>Add a charity</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Web3Button>Connect</Web3Button>
      </Right>
    </Wrapper>
  );
};

export default Top;
