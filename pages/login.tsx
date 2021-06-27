import Essentials from '@components/Essentials';
import LoginScreen from '@screens/Login';

const LoginPage = () => {
  const title = 'Login/Sign up';
  const description =
    'Login or signup to suggest a charity or keep track of your votes.';
  return (
    <Essentials title={title} description={description}>
      <LoginScreen />
    </Essentials>
  );
};

export default LoginPage;
