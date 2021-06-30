import Link from 'next/link';
import { FC } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';

import EmptyStateCharity from './EmptyStateCharity';

import { TabWrapper, Button } from './styles';

const CharitySubmissions: FC = () => {
  return (
    <TabWrapper>
      <EmptyStateCharity />
      <p className="text">You haven&apos;t submitted a charity, yet.</p>
      <Link href="/charity">
        <a>
          <Button>
            <span>
              Add a charity
              <ChevronRight />
            </span>
          </Button>
        </a>
      </Link>
    </TabWrapper>
  );
};

export default CharitySubmissions;
