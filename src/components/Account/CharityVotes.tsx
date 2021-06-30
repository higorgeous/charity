import Link from 'next/link';
import { FC } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';

import EmptyStateVotes from './EmptyStateVotes';

import { TabWrapper, Button } from './styles';

const CharityVotes: FC = () => {
  return (
    <TabWrapper>
      <EmptyStateVotes />
      <p className="text">You haven&apos;t voted on a charity, yet.</p>
      <Link href="/">
        <a>
          <Button>
            <span>
              Vote on a charity
              <ChevronRight />
            </span>
          </Button>
        </a>
      </Link>
    </TabWrapper>
  );
};

export default CharityVotes;
