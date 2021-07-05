import Link from 'next/link';
import { FC } from 'react';

import Spinner from '@components/Spinner';
import HistoryVotes from '@components/HistoryVotes';
import ChevronRight from '@components/CTA/ChevronRight';
import useAuth from '@hooks/useAuth';

import EmptyStateVotes from './EmptyStateVotes';

import { TabWrapper, Button } from './styles';

const CharityVotes: FC = () => {
  const { userVotes } = useAuth();

  let userVoteHistory: {
    id: string;
    name: string;
    logo: string;
    tag: string;
    votedAt: any;
  }[] = [];

  userVotes &&
    userVotes.docs.forEach((votes: any) => {
      const voteHistory = {
        id: votes.data().id,
        name: votes.data().name,
        logo: votes.data().logo,
        tag: votes.data().tag,
        votedAt: votes.data().votedAt,
      };
      userVoteHistory.push(voteHistory);
    });

  return (
    <TabWrapper>
      {!userVotes && <Spinner />}
      {userVotes && userVoteHistory.length === 0 && (
        <>
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
        </>
      )}
      {userVotes && userVoteHistory.length !== 0 && (
        <HistoryVotes voteData={userVoteHistory} />
      )}
    </TabWrapper>
  );
};

export default CharityVotes;
