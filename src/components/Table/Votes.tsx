import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

const addVote = (id: string) => {
  const increment = firebaseClient.firestore.FieldValue.increment(1);
  const voteRef = firebaseClient.firestore().collection('charities').doc(id);
  voteRef.update({ votes: increment });
};

const Votes = (id: string, votes: number) => (
  <VotesColumn onClick={() => addVote(id)}>
    <ArrowUp />
    <span>{votes}</span>
  </VotesColumn>
);

export default Votes;
