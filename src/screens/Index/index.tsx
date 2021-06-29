import { FC } from 'react';

import Hero from '@components/Hero';
import Table from '@components/Table';

const IndexScreen: FC<any> = () => (
  <>
    <Hero>All charity votes</Hero>
    <p className="text">
      Help us decide where our Gorgeous donations go by voting for your
      favourite charity. Anyone can add one vote twice per day. However, holders
      of Gorgeous, connect your wallet, and voting is available every 5 hours
      with votes worth 5 times more.
    </p>
    <Table />
  </>
);

export default IndexScreen;
