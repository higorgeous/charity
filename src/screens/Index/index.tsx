import { FC } from 'react';

import Hero from '@components/Hero';
import Table from '@components/Table';

const IndexScreen: FC<any> = () => (
  <>
    <Hero>All charity votes</Hero>
    <Table />
  </>
);

export default IndexScreen;
