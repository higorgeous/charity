import Essentials from '@components/Essentials';
import firebaseClient from '@services/Firebase/Client';

const CharityPage = (props: any) => {
  const { name, tag } = props.content;

  return (
    <Essentials title={name} description={tag}>
      {name}
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
      content,
    },
  };
};

export default CharityPage;
