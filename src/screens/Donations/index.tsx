import Hero from '@components/Hero';

import EmptyState from './EmptyState';

import { Wrapper, Text } from './styles';

const DonationsScreen = () => (
  <Wrapper>
    <Hero>Donations made by the Gorgeous community</Hero>
    <p className="text">
      Our first donation will be made to the charity, organisation or cause with
      the most votes on Friday 2nd July 2021.
    </p>
    <EmptyState />
  </Wrapper>
);

export default DonationsScreen;
