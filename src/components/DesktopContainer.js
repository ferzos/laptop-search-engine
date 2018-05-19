import React, { Component } from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';

import LandingHeader from './landing/LandingHeader';
import Navbar from './Navbar';

export default class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  desktopComponentBuilder(fixed) {
    if (window.location.pathname === '/') {
      return (
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted textAlign="center" vertical>
            <Navbar fixed={fixed} />
            <LandingHeader />
          </Segment>
        </Visibility>
      );
    } else {
      return <Navbar fixed={true} />;
    }
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        {this.desktopComponentBuilder(fixed)}
        {children}
      </Responsive>
    );
  }
}
