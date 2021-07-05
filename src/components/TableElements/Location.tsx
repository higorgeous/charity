import { LocationColumn } from './styles';

const Location = (charity: any) => (
  <LocationColumn>
    <span>{charity.location.icon} {charity.location.name}</span>
  </LocationColumn>
);

export default Location;
