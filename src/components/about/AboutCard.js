import React, { Component } from 'react';
import { Card, Icon, Header } from 'semantic-ui-react';

export default class AboutCard extends Component {
  render = () => (
    <Card>
      <Card.Content>
        <Header as="h3">
          <Icon name="mail" />
          ferdifenrir@gmail.com
        </Header>
      </Card.Content>
    </Card>
  );
}
