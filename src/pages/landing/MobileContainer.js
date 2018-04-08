import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import MobileSidebar from '../../components/MobileSidebar';

class MobileContainer extends Component {
  render = ({ children } = this.props) => (
    <Responsive {...Responsive.onlyMobile}>
      <MobileSidebar>{children}</MobileSidebar>
    </Responsive>
  );
}

export default MobileContainer;
