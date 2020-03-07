import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { MENU } from '../../constant';

export default class LandingCard extends Component {
  render() {
    const cardsContent = MENU;

    const cards = cardsContent.map(({ icon, title }) => (
      <Card key={title} centered>
        <Card.Content>
          <Card.Header>
            <Icon name={icon} />
            &nbsp;&nbsp;{title}
          </Card.Header>
        </Card.Content>
      </Card>
    ));

    return <Card.Group centered>{cards}</Card.Group>;
  }
}
