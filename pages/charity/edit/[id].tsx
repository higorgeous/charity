import Essentials from '@components/Essentials';
import EditCharityScreen from '@screens/EditCharity';
import firebaseClient from '@services/Firebase/Client';

const EditCharityPage = ({ content }: any) => {
  return (
    <Essentials
      title={`Edit ${content.name}`}
      description={content.tag}
      isCharity
    >
      <EditCharityScreen item={content} />
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
