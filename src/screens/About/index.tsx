import Hero from '@components/Hero';

import { Wrapper } from './styles';

const AboutScreen = () => (
  <Wrapper>
    <Hero>About Gorgeous</Hero>
    <p className="text">
      Centered around a simple but ambitious moonshot, to make the world more
      gorgeous.
    </p>
    <p className="sentence">
      Driven by a desire to make a difference together, Gorgeous is the
      philanthropic and charitable vehicle that will take us to the moon,
      develop the foundations to support those that need a little more Gorgeous
      in their lives, and highlight the ability of human ingenuity to bring
      about change.
    </p>
    <p className="sentence">
      The friction-less, yield-generating smart contract on the Binance Smart
      Chain (BSC) allows our community to earn from each transaction whilst
      refinancing pools for charity and project operations, burning tokens, and
      adding back to liquidity.
    </p>
    <p className="sentence">
      Created to facilitate the development of several innovative solutions to
      real-world problems, the first is a pay-it-forward application that will
      take fees earned in the charity wallet, making them accessible among
      coffee shops, restaurants, and accommodation providers. The second,
      Cloudlabs is set to be the Kubernetes for medical research.
    </p>
  </Wrapper>
);

export default AboutScreen;
