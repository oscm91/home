import React from 'react';
import { Tabs, TabsProps } from './index';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const tabs = () => {
  const props: TabsProps = {};

  return (
    <Tabs {...props}>
      <span
        onClick={() => {
          console.log('today');
        }}
      >
        Hoy
      </span>
      <span
        data-active={true}
        onClick={() => {
          console.log('week');
        }}
      >
        Esta semana
      </span>
      <span
        onClick={() => {
          console.log('september');
        }}
      >
        Septiembre
      </span>
    </Tabs>
  );
};
