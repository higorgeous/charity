import { useMemo, useState, FC } from 'react';
import { useFlags } from '@atlaskit/flag';

import useAuth from '@hooks/useAuth';
import useWeb3 from '@hooks/useWeb3';

import Profile from '../TableElements/Profile';
import Location from '../TableElements/Location';
import Votes from '../TableElements/Votes';
import TableData from '../TableElements/TableData';

import { Wrapper } from '../TableElements/styles';

const VoteTable: FC<any> = ({ charitiesData, charitiesLoading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const { user, userVotes } = useAuth();
  const { showFlag } = useFlags();
  const { isHolder } = useWeb3();

  let userVoteHistory: {
    id: string;
    votedAt: any;
  }[] = [];

  userVotes &&
    userVotes.docs.forEach((votes: any) => {
      const voteHistory = {
        id: votes.data().id,
        votedAt: votes.data().votedAt,
      };
      userVoteHistory.push(voteHistory);
    });

  const data = charitiesData.map((charity: any, index: number) => {
    return {
      id: charity.id,
      charity: Profile(charity, index),
      location: Location(charity),
      votes: Votes(
        charity,
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
