import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuList extends Component {
  render = () => (
    <div className="menu-list">
      <Menu.Item as={NavLink} exact to="/">
        Beranda
      </Menu.Item>
      <Menu.Item as={NavLink} exact to="/about">
        Tentang
      </Menu.Item>
    </div>
  );
}
