import { TypeColumn } from './styles';

const Type = (charity: any) => (
  <TypeColumn>
    <span>{charity.type.value}</span>
  </TypeColumn>
);

export default Type;
