import Image from 'next/image';
import Link from 'next/link';

import { shimmer } from '@components/Icons/Shimmer';
import { toBase64 } from '@utils/toBase64';

import { CharityColumn } from './styles';

const Profile = (name: string, tag: string, id: string, index: number) => (
  <CharityColumn>
    <Link href={`/${id}`}>
      <a>
        <span className="rank">{index + 1}</span>
        <span className="logo">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
            alt={name}
            width="50"
            height="50"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(60, 60),
            )}`}
          />
        </span>
        <span className="profile">
          <span className="name">{name}</span>
          <span className="tag">{tag}</span>
        </span>
      </a>
    </Link>
  </CharityColumn>
);

export default Profile;
