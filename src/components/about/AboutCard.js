import React, { Component } from 'react';
import { Card, Icon, Header } from 'semantic-ui-react';

export default class AboutCard extends Component {
  cardsContent = [
    {
      icon: 'mail',
      title: 'ferdifenrir@gmail.com',
      link:
        'https://mail.google.com/mail/?view=cm&fs=1&to=ferdifenrir@gmail.com',
    },
    { icon: 'github', title: 'ferzos', link: 'https://github.com/ferzos' },
    { icon: 'medium', title: '@ferzos', link: 'https://medium.com/@ferzos' },
  ];

  render = () =>
    this.cardsContent.map(({ icon, title, link }) => (
      <Card onClick={() => window.open(link, '_blank')}>
        <Card.Content>
          <Header as="h3">
            <Icon name={icon} />
            {title}
          </Header>
        </Card.Content>
      </Card>
    ));
}
