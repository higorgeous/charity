import { useMemo, ReactNode, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import useAuth from '@hooks/useAuth';
import firebaseClient from '@services/Firebase/Client';

import Profile from './Profile';
import Location from './Location';
import Votes from './Votes';
import TableData from './TableData';

import { Wrapper } from './styles';
import { useFlags } from '@atlaskit/flag';
import useWeb3 from '@hooks/useWeb3';

const Table: React.FC<any> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const { user } = useAuth();
  const { showFlag } = useFlags();
  const { isHolder } = useWeb3();

  const [charityData, loading] = useCollection(
    firebaseClient.firestore().collection('charities').orderBy('votes', 'desc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  console.log(charityData);

  const [userVotes] = useCollection(
    firebaseClient
      .firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('votes')
      .orderBy('votedAt', 'desc'),
  );

  let userVoteHistory: {
    charityId: string;
    votedAt: any;
  }[] = [];

  userVotes &&
    userVotes.docs.forEach((votes: any) => {
      const voteHistory = {
        charityId: votes.data().charityId,
        votedAt: votes.data().votedAt,
      };
      userVoteHistory.push(voteHistory);
    });

  let data: {
    id: string;
    charity: ReactNode;
    location: ReactNode;
    votes: ReactNode;
  }[] = [];

  charityData &&
    charityData.docs.forEach((charity: any, index: number) => {
      const charityData = {
        id: charity.id,
        charity: Profile(
          charity.data().name,
          charity.data().tag,
          charity.id,
          index,
        ),
        location: Location(charity.data().location),
        votes: Votes(
          charity.id,
          charity.data().name,
          charity.data().votes,
          userVoteHistory,
          modalIsOpen,
          setModalIsOpen,
          showFlag,
          isHolder,
          user?.uid,
        ),
      };
      data.push(charityData);
    });

  const columns = useMemo(
    () => [
      {
        Headers: 'Charity',
        accessor: 'charity',
      },
      {
        Headers: 'Location',
        accessor: 'location',
      },
      {
        Headers: 'Votes',
        accessor: 'votes',
      },
    ],
    [],
  );

  return (
    <Wrapper>
      <TableData columns={columns} data={data} loading={loading} />
    </Wrapper>
  );
};

export default Table;
