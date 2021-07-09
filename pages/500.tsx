import Essentials from '@components/Essentials';
import ErrorScreen from '@screens/Error';

const title = '500: Page not found';
const description =
  'We’re not quite sure what went wrong. Please reload the page.';

const Error500 = () => {
  return (
    <Essentials title={title} description={description}>
      <ErrorScreen title={title} description={description} error="500" />
    </Essentials>
  );
};

export default Error500;
