import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuList extends Component {
  render() {
    const menus = [
      { route: '/', name: 'Beranda' },
      { route: '/about', name: 'Tentang' },
    ];

    return menus.map(({ route, name }) => (
      <Menu.Item key={route} as={NavLink} exact to={route}>
        {name}
      </Menu.Item>
    ));
  }
}
