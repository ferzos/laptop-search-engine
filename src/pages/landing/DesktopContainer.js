import React, { Component } from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';

import LandingHeader from '../../components/landing/LandingHeader';
import Navbar from '../../components/Navbar';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
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
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
