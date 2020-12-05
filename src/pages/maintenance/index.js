import React, { Component } from 'react';
import { Grid, Header, Icon, Segment, Label, Button } from 'semantic-ui-react';

class Maintenance extends Component {
  render() {
    return (
      <Segment className="maintenance">
        <Grid style={{ height: '100%' }}>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h2" icon inverted>
              <Icon name="wrench" inverted />
              {'Under Maintenance'}
              <Header.Subheader>{`We'll be back soon!`}</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Maintenance;
