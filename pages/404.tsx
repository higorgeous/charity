import Essentials from '@components/Essentials';
import ErrorScreen from '@screens/Error';

const title = '404: Page not found';
const description =
  'This page does not exist. Please check the URL and ensure it is correct.';

const Error404 = () => {
  return (
    <Essentials title={title} description={description}>
      <ErrorScreen title={title} description={description} error="404" />
    </Essentials>
  );
};

export default Error404;
