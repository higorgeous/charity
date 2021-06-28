import Essentials from '@components/Essentials';
import TermsScreen from '@screens/Terms';

const TermsPage = () => {
  const title = 'Terms of use';
  const description = 'Learn more about Gorgeous and their wonderful community';
  return (
    <Essentials title={title} description={description}>
      <TermsScreen />
    </Essentials>
  );
};

export default TermsPage;
