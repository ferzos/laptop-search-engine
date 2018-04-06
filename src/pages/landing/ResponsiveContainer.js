import React, { Component } from 'react';
import DesktopContainer from './DesktopContainer';

export default class ResponsiveContainer extends Component {
  render = ({ children } = this.props) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      {/* <MobileContainer>{children}</MobileContainer> */}
    </div>
  );
}
