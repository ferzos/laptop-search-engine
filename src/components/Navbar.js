import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

import MenuList from './MenuList';
export default class Navbar extends Component {
  render = () => (
    <Menu
      fixed={this.props.fixed ? 'top' : null}
      inverted={!this.props.fixed}
      pointing={!this.props.fixed}
      secondary={!this.props.fixed}
      size="large"
    >
      <Container>
        <MenuList />
      </Container>
    </Menu>
  );
}
