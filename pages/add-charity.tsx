import Essentials from '@components/Essentials';
import AddCharityScreen from '@screens/AddCharity';

const AdCharityPage = () => {
  const title = 'Add a Charity';
  const description =
    'Want a charity to be considered and voted on by the Gorgeous community, apply here.';
  return (
    <Essentials title={title} description={description}>
      <AddCharityScreen />
    </Essentials>
  );
};

export default AdCharityPage;
