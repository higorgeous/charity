import { FC } from 'react';
import Router from 'next/router';

import Hero from '@components/Hero';
import ChevronRight from '@components/CTA/ChevronRight';

import EmptyState from './ErrorState';

import { Wrapper, Button } from './styles';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  error: '404' | '500';
};

const ErrorScreen: FC<Props> = ({ title, description, error }) => {
  return (
    <Wrapper>
      <Hero>{title}</Hero>
      <p className="text">{description}</p>
      <EmptyState />
      {error === '404' && (
        <Link href="/">
          <a>
            <Button>
              <span>
                Go to homepage
                <ChevronRight />
              </span>
            </Button>
          </a>
        </Link>
      )}
      {error === '500' && (
        <Button onClick={() => Router.push('/')}>
          <span>
            Go to homepage
            <ChevronRight />
          </span>
        </Button>
      )}
    </Wrapper>
  );
};

export default ErrorScreen;
