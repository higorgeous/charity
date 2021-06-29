import useWeb3 from '@hooks/useWeb3';
import Link from 'next/link';
import { FC } from 'react';

import { Left, Right, Web3Button, Wrapper } from './styles';

const Top: FC = () => {
  const { onWeb3Click, account } = useWeb3();
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
        <Link href="/account">
          <a>Account</a>
        </Link>
        <Web3Button onClick={onWeb3Click}>
          {account ? account : 'Connect'}
        </Web3Button>
      </Right>
    </Wrapper>
  );
};

export default Top;
