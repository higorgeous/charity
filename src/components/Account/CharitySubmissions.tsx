import Link from 'next/link';
import { FC } from 'react';

import Spinner from '@components/Spinner';
import HistorySubmission from '@components/HistorySubmission';
import ChevronRight from '@components/CTA/ChevronRight';
import useAuth from '@hooks/useAuth';

import EmptyStateCharity from './EmptyStateCharity';

import { TabWrapper, Button } from './styles';

const CharitySubmissions: FC = () => {
  const { userSubmissions } = useAuth();

  let userSubmissionHistory: {
    id: string;
    name: string;
    logo: string;
    tag: string;
    createdAt: string;
  }[] = [];

  userSubmissions &&
    userSubmissions.docs.forEach((submission: any) => {
      const SubmissionHistory = {
        id: submission.data().id,
        name: submission.data().name,
        logo: submission.data().logo,
        tag: submission.data().tag,
        createdAt: submission.data().createdAt,
      };
      userSubmissionHistory.push(SubmissionHistory);
    });

  return (
    <TabWrapper>
      {!userSubmissions && <Spinner />}
      {userSubmissions && userSubmissionHistory.length === 0 && (
        <>
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
        </>
      )}
      {userSubmissions && userSubmissionHistory.length !== 0 && (
        <HistorySubmission submissionData={userSubmissionHistory} />
      )}
    </TabWrapper>
  );
};

export default CharitySubmissions;
