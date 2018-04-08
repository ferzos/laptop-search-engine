import React, { Component } from 'react';
import { Sidebar, Menu, Segment, Container, Icon } from 'semantic-ui-react';

import LandingHeader from './landing/LandingHeader';
import MenuList from './MenuList';

export default class MobileSidebar extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

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
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <LandingHeader mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
