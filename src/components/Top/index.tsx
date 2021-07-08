import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import useWeb3 from '@hooks/useWeb3';
import segmentEvent from '@utils/segmentEvent';
import isClientSide from '@utils/isClientSide';
import useAuth from '@hooks/useAuth';

import { Left, Right, Web3Button, Wrapper } from './styles';

const Top: FC = () => {
  const { user } = useAuth();
  const { onWeb3Click, account, isHolder } = useWeb3();
  const { asPath } = useRouter();

  useEffect(() => {
    if (isClientSide && isHolder)
      (window as any).analytics.identify(user?.uid, {
        uid: user?.uid,
        gorgeousHolder: isHolder,
        wallet: account,
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const externalClick = () => {
    segmentEvent('externalLink', {
      title: 'Making everyday, a Gorgeous day.',
      href: 'https://www.higorgeous.io',
      path: asPath,
      position: 'top',
      user: user?.uid,
    });
  };
  return (
    <Wrapper>
      <Left>
        <a
          href="https://www.higorgeous.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Making everyday, a Gorgeous day."
          onClick={() => externalClick()}
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
