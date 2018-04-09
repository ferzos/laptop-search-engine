import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class LandingCard extends Component {
  render() {
    const cardsContent = [
      { icon: 'server', title: 'Processor' },
      { icon: 'microchip', title: 'RAM' },
      { icon: 'game', title: 'VGA Card' },
      { icon: 'database', title: 'Kapasitas' },
      { icon: 'industry', title: 'Merek' },
      { icon: 'money', title: 'Harga' },
    ];

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
