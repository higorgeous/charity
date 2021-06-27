import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useFlags } from '@atlaskit/flag';

import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

dayjs.extend(relativeTime);

const addVote = (id: string, userId?: string) => {
  const batch = firebaseClient.firestore().batch();
  const increment = firebaseClient.firestore.FieldValue.increment(1);
  const voteRef = firebaseClient.firestore().collection('charities').doc(id);
  const userRef = firebaseClient
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('votes')
    .doc(new Date().toISOString());
  batch.set(
    userRef,
    {
      charityId: id,
      votedAt: new Date().toISOString(),
    },
    { merge: true },
  );
  batch.update(voteRef, { votes: increment });
  batch.commit();
};

const Votes = (
  id: string,
  votes: number,
  userVoteHistory: Array<any>,
  userId?: string,
) => {
  const { showFlag } = useFlags();

  const currentTimeStamp = dayjs(new Date());

  const hasVoted = userVoteHistory.some(
    (vendor) =>
      vendor['charityId'] === id &&
      currentTimeStamp.diff(dayjs(vendor['votedAt']), 'hour') <= 12,
  );

  const nextVote =
    userVoteHistory.length !== 0 &&
    dayjs(dayjs(userVoteHistory[0].votedAt))
      .add(12, 'hour')
      .from(dayjs(userVoteHistory[0].votedAt));

  const cannotVote =
    userVoteHistory.length !== 0 &&
    currentTimeStamp.diff(dayjs(userVoteHistory[0].votedAt), 'hour') <= 12;

  const addNoVoteFlag = () => {
    showFlag({
      icon: null,
      appearance: 'error',
      title: `Please wait ${nextVote} until your next vote`,
      isAutoDismiss: true,
    });
  };
  return (
    <VotesColumn
      onClick={() => (cannotVote ? addNoVoteFlag() : addVote(id, userId))}
      clicked={hasVoted}
    >
      <ArrowUp />
      <span>{votes}</span>
    </VotesColumn>
  );
};

export default Votes;
