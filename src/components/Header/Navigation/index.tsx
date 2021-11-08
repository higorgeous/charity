import Link from 'next/link';
import { useRouter } from 'next/router';

import { Wrapper, Items } from './styles';

type ItemProps = {
  title: string;
  href: string;
};

const navItems: Array<ItemProps> = [
  {
    title: `Charities`,
    href: `/`,
  },
  {
    title: `About`,
    href: `/about`,
  },
];

const Navigation = () => {
  const { asPath } = useRouter();

  return (
    <Wrapper className="tablet-hide">
      <Items>
        {navItems.map((item: ItemProps) => (
          <li key={item.title}>
            <Link href={item.href}>
              <a
                aria-label={item.title}
                className={asPath === item.href ? `active` : ``}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Navigation;
