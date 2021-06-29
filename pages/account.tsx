import Essentials from '@components/Essentials';
import AccountScreen from '@screens/Account';

const title = 'Account';
const description = 'View your voting history and charity submissions.';

const AccountPage = () => {
  return (
    <Essentials title={title} description={description}>
      <AccountScreen />
    </Essentials>
  );
};

export default AccountPage;
