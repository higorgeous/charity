import Essentials from '@components/Essentials';
import IndexScreen from '@screens/Index';

const title = 'Charity voting platform for Gorgeous donations';
const description =
  'Vote on the charities you want the Gorgeous community to donate to.';

const IndexPage = () => {
  return (
    <Essentials title={title} description={description}>
      <IndexScreen />
    </Essentials>
  );
};

export default IndexPage;
