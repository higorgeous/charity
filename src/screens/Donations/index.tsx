import Hero from '@components/Hero';

import EmptyState from './EmptyState';

import { Wrapper } from './styles';

const DonationsScreen = () => (
  <Wrapper>
    <Hero>Donations made by the Gorgeous community</Hero>
    <p className="text">
      Our first donation will be made to the charity, organisation or cause with
      the most votes on Friday 9th July 2021. Details and receipts will be shown
      on this page.
    </p>
    <EmptyState />
  </Wrapper>
);

export default DonationsScreen;
