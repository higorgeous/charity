import { Wrapper } from './styles';

const Hero: React.FC = ({ children }) => (
  <Wrapper>
    <h1>{children}</h1>
  </Wrapper>
);

export default Hero;
