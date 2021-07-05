import Essentials from '@components/Essentials';
import useDocumentDataSSR from '@hooks/useDocumentDataSSR';
import EditCharityScreen from '@screens/EditCharity';
import firebaseClient from '@services/Firebase/Client';

const EditCharityPage = ({ content, id }: any) => {
  const ref = firebaseClient.firestore().collection('charities').doc(id);
  const [item] = useDocumentDataSSR(ref, { startWith: content });
  return (
    <Essentials title={`Edit ${item.name}`} description={item.tag} isCharity>
      <EditCharityScreen item={item} />
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

export default EditCharityPage;
