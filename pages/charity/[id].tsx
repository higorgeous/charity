import Essentials from '@components/Essentials';
import CharityScreen from '@screens/Charity';
import firebaseClient from '@services/Firebase/Client';

const CharityPage = (props: any) => {
  const { name, tag } = props.content;
  console.log(props);

  return (
    <Essentials title={name} description={tag}>
      <CharityScreen name={name} />
    </Essentials>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  console.log(query);

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
