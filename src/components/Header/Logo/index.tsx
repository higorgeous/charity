import { useState, useEffect } from "react";
import Link from 'next/link'

import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

import { Wrapper } from './styles';

const Logo = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <Wrapper>
      {width > 1024 && <Link href="/" aria-label="Gorgeous Charity Token"><a><Desktop /></a></Link>}
      {width <= 1024 && width >= 568 && <Link href="/" aria-label="Gorgeous Charity Token"><a><Tablet /></a></Link>}
      {width < 568 && <Link href="/" aria-label="Gorgeous Charity Token"><a><Mobile /></a></Link>}
    </Wrapper>
  );
};

export default Logo;