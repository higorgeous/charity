import { useMemo, FC } from 'react';

import Profile from '../TableElements/Profile';
import VotedAt from '../TableElements/VotedAt';
import TableData from '../TableElements/TableData';

import { Wrapper } from '../TableElements/styles';

const HistoryVotes: FC<any> = ({ voteData }) => {
  const data = voteData.map((charity: any, index: number) => {
    return {
      charity: Profile(charity, index),
      votedAt: VotedAt(charity),
    };
  });

  const columns = useMemo(
    () => [
      {
        Headers: 'Charity',
        accessor: 'charity',
      },
      {
        Headers: 'Voted',
        accessor: 'votedAt',
      },
    ],
    [],
  );

  return (
    <Wrapper twoColumn>
      <TableData columns={columns} data={data} />
    </Wrapper>
  );
};

export default HistoryVotes;
