import { LocationColumn } from './styles';

const Location = (charity: any) => (
  <LocationColumn>
    <span>{charity.location}</span>
  </LocationColumn>
);

export default Location;
