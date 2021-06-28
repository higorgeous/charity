import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';

import {
  Facebook,
  Github,
  Instagram,
  Medium,
  Reddit,
  Telegram,
  Twitter,
} from './Icons';

import { Left, Right, Wrapper } from './styles';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Left>
        <a
          href="https://www.higorgeous.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Created by Gorgeous"
        >
          Created by Gorgeous © {dayjs().year()}
        </a>
        <span>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </span>
      </Left>
      <Right>
        <a
          href="https://t.me/gorgeoustoken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Telegram />
        </a>
        <a
          href="https://twitter.com/GorgeousToken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
        <a
          href="https://www.reddit.com/r/GorgeousToken/new/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reddit"
        >
          <Reddit />
        </a>
        <a
          href="https://www.facebook.com/gorgeousToken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/gorgeousbsctoken/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          href="https://medium.com/@gorgeousToken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <Medium />
        </a>
        <a
          href="https://github.com/higorgeous"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Github />
        </a>
      </Right>
    </Wrapper>
  );
};

export default Footer;
