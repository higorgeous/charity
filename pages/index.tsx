import { FC } from 'react';

import Essentials from '@components/Essentials';
import useCollectionDataSSR from '@hooks/useCollectionDataSSR';
import IndexScreen from '@screens/Index';
import firebaseClient from '@services/Firebase/Client';

const title = 'Vote for your favourite charity';
const description =
  'Vote on the charities you want the Gorgeous community to donate to.';

const IndexPage: FC = ({ content }: any) => {
  const ref = firebaseClient
    .firestore()
    .collection('charities')
    .orderBy('votes', 'desc');
  const [charitiesData, charitiesLoading] = useCollectionDataSSR(ref, {
    startWith: content,
  });

  return (
    <Essentials title={title} description={description}>
      <IndexScreen
        charitiesData={charitiesData}
        charitiesLoading={charitiesLoading}
      />
    </Essentials>
  );
};

export const getServerSideProps = async () => {
  const charities = await firebaseClient
    .firestore()
    .collection('charities')
    .orderBy('votes', 'desc')
    .get();
  const content = charities.docs.map((doc) => doc.data());

  return {
    props: {
      content,
    },
  };
};

export default IndexPage;
