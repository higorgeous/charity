import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

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
  const hasVoted = userVoteHistory.some((vendor) => vendor['charityId'] === id);

  return (
    <VotesColumn onClick={() => addVote(id, userId)} clicked={hasVoted}>
      <ArrowUp />
      <span>{votes}</span>
    </VotesColumn>
  );
};

export default Votes;
