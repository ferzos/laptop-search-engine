import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

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
        <Menu.Item as={NavLink} exact to="/">
          Beranda
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/about">
          Tentang
        </Menu.Item>
      </Container>
    </Menu>
  );
}
