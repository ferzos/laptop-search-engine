import React, { Component } from 'react';
import {
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon,
  Header,
} from 'semantic-ui-react';

import LandingHeader from './landing/LandingHeader';
import MenuList from './MenuList';

export default class MobileSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLanding: window.location.pathname === '/',
      isSearch: window.location.pathname === '/search',
    };
  }

  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  landingBuilder = () => {
    if (this.state.isLanding) return <LandingHeader mobile />;
  };

  headerBuilder = () => {
    if (!this.state.isLanding)
      return <Header as="h3" content="Mesin Pencari Laptop" />;
  };

  menuBuilder = () => {
    if (!this.state.isSearch)
      return (
        <Menu inverted pointing secondary size="large">
          <Menu.Item onClick={this.handleToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          {this.headerBuilder()}
        </Menu>
      );
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="uncover"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <MenuList />
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={this.handlePusherClick}
          style={{ minHeight: '100vh' }}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: this.state.isLanding ? '350' : '',
              padding: '1em 0em',
            }}
            vertical
            className="pusher-segment"
          >
            <Container>{this.menuBuilder()}</Container>
            {this.landingBuilder()}
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
