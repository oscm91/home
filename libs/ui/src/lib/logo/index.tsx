import React from 'react';
import { HomeSolid } from '../images';

export interface LogoProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <span onClick={onClick}>
      <HomeSolid />
    </span>
  );
}

export default Logo;
