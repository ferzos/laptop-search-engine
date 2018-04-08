import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import MobileSidebar from '../../components/MobileSidebar';

class MobileContainer extends Component {
  render = () => (
    <Responsive {...Responsive.onlyMobile}>
      <MobileSidebar />
    </Responsive>
  );
}

export default MobileContainer;
