import { useMemo, useEffect, useState, ReactNode, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ArrowUp from '@components/Icons/ArrowUp';
import { shimmer } from '@components/Icons/Shimmer';
import firebaseClient from '@services/Firebase/Client';
import { toBase64 } from '@utils/toBase64';

import TableData from './TableData';

import { CharityColumn, LocationColumn, Wrapper, VotesColumn } from './styles';

const Table: React.FC = () => {
  const [data, setData] = useState([{}]);

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

  const profileColumn = (name: string, tag: string, id: string) => (
    <CharityColumn>
      <Link href={`/${id}`}>
        <a>
          <span className="rank">1</span>
          <span className="logo">
            <Image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
              alt={name}
              width="50"
              height="50"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(60, 60),
              )}`}
            />
          </span>
          <span className="profile">
            <span className="name">{name}</span>
            <span className="tag">{tag}</span>
          </span>
        </a>
      </Link>
    </CharityColumn>
  );

  const locationColumn = (location: string) => (
    <LocationColumn>
      <span>{location}</span>
    </LocationColumn>
  );

  const addVote = (id: string) => {
    const increment = firebaseClient.firestore.FieldValue.increment(1);
    const voteRef = firebaseClient.firestore().collection('charities').doc(id);
    voteRef.update({ votes: increment });
  };

  const voteColumn = useCallback((id: string, votes: number) => {
    return (
      <VotesColumn onClick={() => addVote(id)}>
        <ArrowUp />
        <span>{votes}</span>
      </VotesColumn>
    );
  }, []);

  useEffect(() => {
    let charities: {
      id: string;
      charity: ReactNode;
      votes: ReactNode;
    }[] = [];
    try {
      firebaseClient
        .firestore()
        .collection('charities')
        .orderBy('votes', 'desc')
        .get()
        .then((doc) => {
          doc.forEach((i) => {
            const charity = {
              id: i.id,
              charity: profileColumn(i.data().name, i.data().tag, i.id),
              location: locationColumn(i.data().location),
              votes: voteColumn(i.id, i.data().votes),
              totalVotes: i.data().votes,
            };
            charities.push(charity);
          });
          setData(charities);
        });
    } catch (error) {
      console.log(error);
    }
  }, [voteColumn]);

  return (
    <Wrapper>
      <TableData columns={columns} data={data} />
    </Wrapper>
  );
};

export default Table;
