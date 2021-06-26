import Essentials from '@components/Essentials';
import DonationsScreen from '@screens/Donations';

const Donations = () => {
  const title = 'Donations';
  const description =
    'Charities that the Gorgeous community has helped support.';
  return (
    <Essentials title={title} description={description}>
      <DonationsScreen />
    </Essentials>
  );
};

export default Donations;
