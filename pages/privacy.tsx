import Essentials from '@components/Essentials';
import PrivacyScreen from '@screens/Privacy';

const title = 'Privacy policy';
const description = 'Learn more about Gorgeous and their wonderful community';

const PrivacyPage = () => (
  <Essentials title={title} description={description}>
    <PrivacyScreen />
  </Essentials>
);

export default PrivacyPage;
