import { TypeColumn } from './styles';

const Type = (charity: any) => (
  <TypeColumn>
    <span>{charity.type}</span>
  </TypeColumn>
);

export default Type;
