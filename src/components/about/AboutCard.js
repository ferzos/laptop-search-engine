import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import ProfilePicture from '../../assets/profile-pict.jpg';

export default class AboutCard extends Component {
  render = () => (
    <Card>
      <Image src={ProfilePicture} />
      <Card.Content>
        <Card.Header>Ferdinand Chandra</Card.Header>
        <Card.Meta>
          <span className="color-primary">Frontend Engineer</span>
        </Card.Meta>
        <Card.Description>Hubungi saya lewat dibawah ini</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="mail" />
        ferdifenrir@gmail.com
      </Card.Content>
    </Card>
  );
}
