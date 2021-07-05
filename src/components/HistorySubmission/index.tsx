import { useMemo, FC } from 'react';

import ProfileHistory from '../TableElements/ProfileHistory';
import CreatedAt from '../TableElements/CreatedAt';
import TableData from '../TableElements/TableData';

import { Wrapper } from '../TableElements/styles';

const HistorySubmissions: FC<any> = ({ submissionData }) => {
  const data = submissionData.map((charity: any, index: number) => {
    return {
      charity: ProfileHistory(charity, index),
      createdAt: CreatedAt(charity),
    };
  });

  const columns = useMemo(
    () => [
      {
        Headers: 'Charity',
        accessor: 'charity',
      },
      {
        Headers: 'Created',
        accessor: 'createdAt',
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

export default HistorySubmissions;
