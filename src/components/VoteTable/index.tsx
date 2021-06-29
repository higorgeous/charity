import { useMemo, ReactNode, useState, FC } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFlags } from '@atlaskit/flag';

import useAuth from '@hooks/useAuth';
import firebaseClient from '@services/Firebase/Client';
import useWeb3 from '@hooks/useWeb3';

import Profile from './Profile';
import Location from './Location';
import Votes from './Votes';
import TableData from './TableData';

import { Wrapper } from './styles';

const VoteTable: FC<any> = ({ charitiesData, charitiesLoading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const { user } = useAuth();
  const { showFlag } = useFlags();
  const { isHolder } = useWeb3();

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

  const data = charitiesData.map((charity: any, index: number) => {
    return {
      id: charity.id,
      charity: Profile(charity.name, charity.tag, charity.id, index),
      location: Location(charity.location),
      votes: Votes(
        charity.id,
        charity.name,
        charity.votes,
        userVoteHistory,
        modalIsOpen,
        setModalIsOpen,
        showFlag,
        isHolder,
        user?.uid,
      ),
    };
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
      <TableData columns={columns} data={data} loading={charitiesLoading} />
    </Wrapper>
  );
};

export default VoteTable;
