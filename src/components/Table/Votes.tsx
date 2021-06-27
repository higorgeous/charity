import dayjs from 'dayjs';

import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

const addVote = (id: string, cannotVote: boolean, userId?: string) => {
  if (!cannotVote) {
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
  } else {
    alert('not allowed to vote yet');
  }
};

const Votes = (
  id: string,
  votes: number,
  userVoteHistory: Array<any>,
  userId?: string,
) => {
  const hasVoted = userVoteHistory.some(
    (vendor) =>
      vendor['charityId'] === id &&
      dayjs(new Date()).diff(dayjs(vendor['votedAt']), 'hour') <= 12,
  );

  const cannotVote =
    userVoteHistory.length !== 0 &&
    dayjs(new Date()).diff(dayjs(userVoteHistory[0].votedAt), 'minute') <= 12;

  return (
    <VotesColumn
      onClick={() => addVote(id, cannotVote, userId)}
      clicked={hasVoted}
    >
      <ArrowUp />
      <span>{votes}</span>
    </VotesColumn>
  );
};

export default Votes;
