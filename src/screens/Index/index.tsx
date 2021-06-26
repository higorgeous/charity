import Hero from '@components/Hero';
import Table from '@components/Table';
import firebaseClient from '@services/Firebase/Client';

const IndexScreen = () => {
  // const setData = () => {
  //   try {
  //     firebaseClient.firestore().collection('charities').doc().set({
  //       name: 'National Breast Cancer Foundation',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {/* <div onClick={setData}>Click to add</div> */}
      <Hero>All charity votes</Hero>
      <Table />
    </>
  );
};

export default IndexScreen;
