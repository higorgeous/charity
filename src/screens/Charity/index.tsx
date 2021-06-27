import Hero from '@components/Hero';

type Props = {
  name: string;
};

const CharityScreen = ({ name }: Props) => (
  <>
    <Hero>{name}</Hero>
  </>
);

export default CharityScreen;
