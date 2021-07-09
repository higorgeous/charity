import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button, { ButtonGroup } from '@atlaskit/button';

import useAuth from '@hooks/useAuth';
import { useFlags } from '@atlaskit/flag';
import useWeb3 from '@hooks/useWeb3';

import {
  Website,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  YouTube,
} from './Icons';

import Votes from './Votes';

import { Wrapper, Breadcrumbs, Container, ActionButtons } from './styles';

type Props = {
  charity: any;
  isCharity?: boolean;
};

const ActionBar: FC<Props> = ({ charity, isCharity = false }) => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const { user, userVotes } = useAuth();
  const { showFlag } = useFlags();
  const { isHolder } = useWeb3();

  const router = useRouter();
  const removeHyph = router.pathname.replace('-', ' ');
  const removeSlash = removeHyph.replace('/', '');
  const pageName = removeSlash
    .split('')
    .map((e, i) => (i === 0 ? e.toUpperCase() : e))
    .join('');

  let userVoteHistory: {
    id: string;
    votedAt: any;
  }[] = [];

  userVotes &&
    userVotes.docs.forEach((votes: any) => {
      const voteHistory = {
        id: votes.data().id,
        votedAt: votes.data().votedAt,
      };
      userVoteHistory.push(voteHistory);
    });
    

  return (
    <Wrapper>
      <Breadcrumbs>
        <Container isHome={router.pathname === '/'}>
          <ul>
            {router.pathname === '/' ? (
              <li>
                <span>Charities</span>
              </li>
            ) : (
              <li>
                <Link href="/">
                  <a>Charities</a>
                </Link>
              </li>
            )}
            {isCharity ? (
              <>
                <li>
                  <Link href="/charity">
                    <a>Charity</a>
                  </Link>
                </li>
                <li>
                  <span>{charity.name}</span>
                </li>
              </>
            ) : (
              <li>
                <span>{pageName}</span>
              </li>
            )}
          </ul>
        </Container>
      </Breadcrumbs>
      <ActionButtons>
        <div>
          <div>
            {Votes(
              charity,
              userVoteHistory,
              modalIsOpen,
              setModalIsOpen,
              showFlag,
              isHolder,
              user?.uid,
            )}
          </div>
          <ButtonGroup appearance="default">
            {charity.website && (
              <Button
                iconBefore={<Website />}
                href={charity.website}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {charity.twitter && (
              <Button
                iconBefore={<Twitter />}
                href={charity.twitter}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {charity.facebook && (
              <Button
                iconBefore={<Facebook />}
                href={charity.facebook}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {charity.instagram && (
              <Button
                iconBefore={<Instagram />}
                href={charity.instagram}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {charity.youtube && (
              <Button
                iconBefore={<YouTube />}
                href={charity.youtube}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
            {charity.linkedin && (
              <Button
                iconBefore={<Linkedin />}
                href={charity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </ButtonGroup>
        </div>
      </ActionButtons>
    </Wrapper>
  );
};

export default ActionBar;
