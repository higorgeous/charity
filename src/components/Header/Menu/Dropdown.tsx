import { DropdownContainer, DropdownItems, DropdownItem } from './styles';

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
    title: `Gorgeous website`,
    href: `https://www.higorgeous.io`,
  },
  {
    title: `Whitepaper`,
    href: `https://www.higorgeous.io/gorgeous-whitepaper.pdf`,
  },
  {
    title: `Telegram`,
    href: `https://t.me/gorgeoustoken`,
  },
  {
    title: `Twitter`,
    href: `https://twitter.com/GorgeousToken`,
  },
  {
    title: `Facebook`,
    href: `https://www.facebook.com/gorgeousToken`,
  },
  {
    title: `Instagram`,
    href: `https://www.instagram.com/gorgeousbsctoken/`,
  },
  {
    title: `Reddit`,
    href: `https://www.reddit.com/r/GorgeousToken/new/`,
  },
  {
    title: `Medium`,
    href: `https://medium.com/@gorgeousToken`,
  }
]

const Dropdown = ({ popperRef, styles, attributes, visible }: Props) =>  (
    <div ref={popperRef} style={styles.popper} {...attributes.popper}>
      <DropdownContainer id="dropdown" style={styles.offset} visible={visible}>
        <DropdownItems>
        {navItems.map((item: ItemProps) => (
          <DropdownItem key={item.title}>
            <a id="dropdown" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.title}>{item.title}</a>
          </DropdownItem>
        ))}
        </DropdownItems>
      </DropdownContainer>
    </div>
  );



export default Dropdown;