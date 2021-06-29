import Essentials from '@components/Essentials';
import AccountScreen from '@screens/Account';

const AccountPage = () => {
  const title = 'Voting history and charity listings';
  const description =
    'Account providing a history to keep track of your votes and charity listings.';
  return (
    <Essentials title={title} description={description}>
      <AccountScreen />
    </Essentials>
  );
};

export default AccountPage;
