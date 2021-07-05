import Essentials from '@components/Essentials';
import useDocumentDataSSR from '@hooks/useDocumentDataSSR';
import CharityScreen from '@screens/Charity';
import firebaseClient from '@services/Firebase/Client';

const CharityPage = ({ content, id }: any) => {
  const ref = firebaseClient.firestore().collection('charities').doc(id);
  const [item] = useDocumentDataSSR(ref, { startWith: content });
  return (
    <Essentials title={item.name} description={item.tag} isCharity>
      <CharityScreen item={item} />
    </Essentials>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  let content: any = {};
  await firebaseClient
    .firestore()
    .collection('charities')
    .doc(query.id)
    .get()
    .then((result) => {
      content = result.data();
    });

  return {
    props: {
      id: query.id,
      content,
    },
  };
};

export default CharityPage;
