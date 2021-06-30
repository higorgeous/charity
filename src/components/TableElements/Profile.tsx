import Image from 'next/image';
import Link from 'next/link';

import { CharityColumn } from './styles';

const ProfileVotes = (charity: any, index: number) => (
  <CharityColumn>
    <Link href={`/charity/${charity.id}`}>
      <a>
        <span className="rank">{index + 1}</span>
        <span className="logo">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
            alt={charity.name}
            width="50"
            height="50"
          />
        </span>
        <span className="profile">
          <span className="name">{charity.name} ⓘ</span>
          <span className="tag">{charity.tag}</span>
        </span>
      </a>
    </Link>
  </CharityColumn>
);

export default ProfileVotes;
