import React from 'react';
import { InfoImage } from '../images';

export interface CardProps {
  children?: React.ReactNode;
  title: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="flex flex-col shadow-md rounded-b-lg bg-white overflow-hidden rounded-t-xl">
      <span className="flex text-white justify-between px-5 py-4 bg-primary">
        {title} <InfoImage width="10px" />
      </span>
      <div className="flex items-center flex-col p-6">{children}</div>
    </div>
  );
}

export default Card;
