import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useFlags } from '@atlaskit/flag';
import Modal from 'react-modal';

import ShareIcons from '@components/Header/Menu/ShareIcons';
import { ShareHeading, CloseIcon } from '@components/Header/Menu/styles';
import ArrowUp from '@components/Icons/ArrowUp';
import firebaseClient from '@services/Firebase/Client';

import { VotesColumn } from './styles';

dayjs.extend(relativeTime);

Modal.setAppElement('#__next');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 27, 68, 1)',
    zIndex: 99,
  },
  content: {
    background: `transparent`,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid #ffffff',
    transform: 'translate(-50%, -50%)',
  },
};

const addVote = (id: string, setModalIsOpen: any, userId?: string) => {
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
  setModalIsOpen(true);
};

const Votes = (
  id: string,
  name: string,
  votes: number,
  userVoteHistory: Array<any>,
  modalIsOpen: boolean,
  setModalIsOpen: any,
  userId?: string,
) => {
  const { showFlag } = useFlags();

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

  const shareTitle = `I just voted for ${name} to recieve the next Gorgeous donation. Please vote too.`;
  const shareUrl = `https://charity.higorgeous.io/charity/${id}`;

  return (
    <>
      <VotesColumn
        onClick={() =>
          cannotVote ? addNoVoteFlag() : addVote(id, setModalIsOpen, userId)
        }
        clicked={hasVoted}
      >
        <ArrowUp />
        <span>{votes}</span>
      </VotesColumn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={300}
      >
        <ShareHeading>Share your vote with friends</ShareHeading>
        <ShareIcons shareTitle={shareTitle} shareUrl={shareUrl} />
      </Modal>
      <CloseIcon modalIsOpen={modalIsOpen} onClick={closeModal} />
    </>
  );
};

export default Votes;
