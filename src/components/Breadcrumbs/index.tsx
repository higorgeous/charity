import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Wrapper, Scrollable, Container } from './styles';

type Props = {
  title?: string;
  isCharity?: boolean;
};

const Breadcrumbs: FC<Props> = ({ title, isCharity = false }) => {
  const router = useRouter();
  const removeHyph = router.pathname.replace('-', ' ');
  const removeSlash = removeHyph.replace('/', '');
  const pageName = removeSlash
    .split('')
    .map((e, i) => (i === 0 ? e.toUpperCase() : e))
    .join('');

  return (
    <Wrapper>
      <Scrollable>
        <Container isHome={router.pathname === '/'}>
          <ul>
            <li>
              <Link href="/">
                <a>Charities</a>
              </Link>
            </li>
            {isCharity ? (
              <>
                <li>
                  <Link href="/charity">
                    <a>Charity</a>
                  </Link>
                </li>
                <li>
                  <span>{title}</span>
                </li>
              </>
            ) : (
              <li>
                <span>{pageName}</span>
              </li>
            )}
          </ul>
        </Container>
      </Scrollable>
    </Wrapper>
  );
};

export default Breadcrumbs;
