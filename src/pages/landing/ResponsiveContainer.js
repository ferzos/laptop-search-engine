import React, { Component } from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

export default class ResponsiveContainer extends Component {
  render = ({ children } = this.props) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
}
