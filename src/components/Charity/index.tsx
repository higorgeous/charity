import { FC } from 'react';
import Image from 'next/image';

import ActionBar from '../ActionBar';
import Hero from '../Hero';

import { Wrapper } from './styles';

type Props = {
  item: any;
};

const Charity: FC<Props> = ({ item }) => (
  <Wrapper>
    <ActionBar charity={item} isCharity />
    <Hero>{item.name}</Hero>
    <p className="text">{item.tag}</p>
    {item.image && (
      <Image src={item.image} alt={item.name} width="900px" height="500px" />
    )}
    <div className="description">
      <p>{item.description}</p>
    </div>
  </Wrapper>
);

export default Charity;
