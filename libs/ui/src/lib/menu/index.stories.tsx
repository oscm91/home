import React from 'react';
import { Menu, MenuProps, MenuItem } from './index';
import { HomeSolid, SignOutAltSolid, ToolsSolid } from '../images';

export default {
  component: Menu,
  title: 'Menu',
};

export const menu = () => {
  const props: MenuProps = {};

  return (
    <div className="flex bg-background p-4">
      <div className="inline-flex flex-col px-2 bg-white h-screen justify-between rounded-l-xl overflow-hidden">
        <Menu {...props}>
          <MenuItem
            onClick={() => {
              console.log('home');
            }}
          >
            <HomeSolid />
          </MenuItem>
          <MenuItem
            data-active={true}
            onClick={() => {
              console.log('resume');
            }}
          >
            <ToolsSolid />
          </MenuItem>
        </Menu>
        <Menu {...props}>
          <MenuItem
            onClick={() => {
              console.log('logout');
            }}
          >
            <SignOutAltSolid />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
