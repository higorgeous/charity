import { Trigger } from './styles';

type Props = {
  referenceRef: any;
  handleClick: any;
};

const Hamburger = ({ referenceRef, handleClick }: Props) => (
  <Trigger
    aria-label="Menu"
    type="button"
    ref={referenceRef}
    onClick={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
    >
      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
        <path d="M1,1H19" />
        <path d="M1,9H19" />
        <path d="M1,17H19" />
      </g>
    </svg>
  </Trigger>
);

export default Hamburger;
