import Link from 'next/link';
import { useRouter } from "next/router";

import { DropdownContainer, DropdownItems, DropdownHeading, DropdownItem } from './styles';

type Props = {
  popperRef: any;
  styles: any;
  attributes: any;
  visible: boolean;
}

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
    title: `Donations`,
    href: `/donations`,
  },
  {
    title: `About`,
    href: `/about`,
  }
]

const externalItems: Array<ItemProps> = [
  {
    title: `Visit our website`,
    href: `https://www.higorgeous.io`,
  },
  {
    title: `Read our whitepaper`,
    href: `https://www.higorgeous.io/gorgeous-whitepaper.pdf`,
  },
  {
    title: `Join our Telegram`,
    href: `https://t.me/gorgeoustoken`,
  }
]

const Dropdown = ({ popperRef, styles, attributes, visible }: Props) =>  {
  const { asPath } = useRouter();

  return (
    <div ref={popperRef} style={styles.popper} {...attributes.popper}>
      <DropdownContainer id="dropdown" style={styles.offset} visible={visible}>
        <DropdownItems>
          <DropdownHeading className="tablet-show">Menu</DropdownHeading>
          {navItems.map((item: ItemProps) => (
            <DropdownItem key={item.title} className="tablet-show">
              <Link href={item.href}><a id="dropdown" aria-label={item.title} className={asPath === item.href ? `active` : ``}>{item.title}</a></Link>
            </DropdownItem>
          ))}
          <DropdownHeading className="tablet-show">External links</DropdownHeading>
          {externalItems.map((item: ItemProps) => (
            <DropdownItem key={item.title}>
              <a id="dropdown" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.title}>{item.title}</a>
            </DropdownItem>
          ))}
        </DropdownItems>
      </DropdownContainer>
    </div>
  );
};



export default Dropdown;