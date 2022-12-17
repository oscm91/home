import React from 'react';
import { Header } from './index';
import { HelpImage } from '../../index';

export default {
  component: Header,
  title: 'Header',
};

export const header = (props) => {
  return (
    <Header {...props}>
      <nav className="flex justify-center items-center text-white space-x-8 font-light">
        <a href="#">Mi negocio</a>
        <a href="#" className="flex">
          Ayuda <HelpImage width="15px" />
        </a>
      </nav>
    </Header>
  );
};

header.args = {
  onClick: () => {},
};
