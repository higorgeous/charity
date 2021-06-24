import Link from 'next/link';
import { useRouter } from "next/router";

import { Wrapper, Items } from './styles';

type ItemProps = {
  title: string;
  href: string
};

const navItems: Array<ItemProps> = [
  {
    title: `Charities`,
    href: `/`,
  },
  {
    title: `Add charity`,
    href: `/add-charity`,
  },
  {
    title: `About`,
    href: `/about`,
  }
]

const Navigation = () => {
  const { asPath } = useRouter();

  return (
    <Wrapper>
      <Items>
        {navItems.map((item: ItemProps) => (
          <li key={item.title}>
            <Link href={item.href}><a className={asPath === item.href ? `active` : ``}>{item.title}</a></Link>
          </li>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Navigation;