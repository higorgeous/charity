import { FC } from 'react';

import Logo from '@components/Header/Logo';

import { Wrapper, Left, Right, Button } from './styles';
import ChevronRight from './ChevronRight';

const CTA: FC = () => (
  <Wrapper>
    <Left>
      <div>
        <Logo />
      </div>
    </Left>
    <Right>
      <span>Would you like to know more about Gorgeous tokens?</span>
      <div>
        <Button
          href="https://www.higorgeous.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="www.higorgeous.io"
        >
          <span>
            View our website
            <ChevronRight />
          </span>
        </Button>
        <Button
          href="https://t.me/gorgeoustoken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <span>
            Join our Telegram
            <ChevronRight />
          </span>
        </Button>
      </div>
    </Right>
  </Wrapper>
);

export default CTA;
