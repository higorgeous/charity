import { useMemo, ReactNode } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import firebaseClient from '@services/Firebase/Client';

import Profile from './Profile';
import Location from './Location';
import Votes from './Votes';
import TableData from './TableData';

import { Wrapper } from './styles';

const Table: React.FC<any> = () => {
  const [value, loading, error] = useCollection(
    firebaseClient.firestore().collection('charities').orderBy('votes', 'desc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  let data: {
    id: string;
    charity: ReactNode;
    location: ReactNode;
    votes: ReactNode;
  }[] = [];

  value &&
    value.docs.forEach((charity: any, index: number) => {
      const charityData = {
        id: charity.id,
        charity: Profile(
          charity.data().name,
          charity.data().tag,
          charity.id,
          index,
        ),
        location: Location(charity.data().location),
        votes: Votes(charity.id, charity.data().votes),
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
      <TableData columns={columns} data={data} />
    </Wrapper>
  );
};

export default Table;
