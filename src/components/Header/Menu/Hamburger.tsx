import { Button } from './styles';

const Hamburger = () => (
  <Button aria-label="Menu" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
      <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2">
        <path d="M1,1H19" />
        <path d="M1,9H19" />
        <path d="M1,17H19" />
      </g>
    </svg>
  </Button>
);

export default Hamburger;