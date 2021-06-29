import Essentials from '@components/Essentials';
import AboutScreen from '@screens/About';

const title = 'About Gorgeous';
const description = 'Learn more about Gorgeous and their wonderful community';

const AboutPage = () => (
  <Essentials title={title} description={description}>
    <AboutScreen />
  </Essentials>
);

export default AboutPage;
