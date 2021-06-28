import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Modal from 'react-modal';

import ShareIcons from '@components/Header/Menu/ShareIcons';
import { ShareHeading, CloseIcon } from '@components/Header/Menu/styles';
import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

dayjs.extend(relativeTime);

Modal.setAppElement('#__next');

const customStyles = {
  content: {
    background: `transparent`,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const addVote = (
  id: string,
  setModalIsOpen: any,
  isHolder: boolean,
  userId?: string,
) => {
  const voteWeight = isHolder ? 5 : 1;
  const batch = firebaseClient.firestore().batch();
  const increment = firebaseClient.firestore.FieldValue.increment(voteWeight);
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
  setModalIsOpen(true);
};

const Votes = (
  id: string,
  name: string,
  votes: number,
  userVoteHistory: Array<any>,
  modalIsOpen: string | null,
  setModalIsOpen: any,
  showFlag: any,
  isHolder: boolean,
  userId?: string,
) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const timePeriod = isHolder ? 5 : 12;

  const currentTimeStamp = dayjs(new Date());

  const hasVoted = userVoteHistory.some(
    (vendor) =>
      vendor['charityId'] === id &&
      currentTimeStamp.diff(dayjs(vendor['votedAt']), 'hour') <= timePeriod,
  );

  const nextVote =
    userVoteHistory.length !== 0 &&
    dayjs(dayjs(userVoteHistory[0].votedAt))
      .add(timePeriod, 'hour')
      .from(currentTimeStamp, true);

  const cannotVote =
    userVoteHistory.length !== 0 &&
    currentTimeStamp.diff(dayjs(userVoteHistory[0].votedAt), 'hour') <=
      timePeriod;

  const addNoVoteFlag = () => {
    showFlag({
      icon: null,
      appearance: 'error',
      title: `Please wait ${nextVote} until your next vote`,
      isAutoDismiss: true,
    });
  };

  const shareTitle = `I just voted for ${name} to recieve the next Gorgeous donation. Please vote too.`;
  const shareUrl = `https://charity.higorgeous.io/charity/${id}`;

  return (
    <>
      <VotesColumn
        onClick={() =>
          cannotVote
            ? addNoVoteFlag()
            : addVote(id, setModalIsOpen, isHolder, userId)
        }
        clicked={hasVoted}
      >
        <ArrowUp />
        <span>{votes}</span>
      </VotesColumn>
      <Modal
        isOpen={modalIsOpen === id}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={300}
      >
        <ShareHeading>Share your vote with friends</ShareHeading>
        <ShareIcons shareTitle={shareTitle} shareUrl={shareUrl} />
      </Modal>
      <CloseIcon modalIsOpen={modalIsOpen === id} onClick={closeModal} />
    </>
  );
};

export default Votes;
