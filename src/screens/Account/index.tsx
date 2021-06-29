import Hero from '@components/Hero';

import { Wrapper } from './styles';

const AccountScreen = () => (
  <Wrapper>
    <Hero>Your account</Hero>
    <p className="text">View your voting history and charity submissions.</p>
  </Wrapper>
);

export default AccountScreen;
