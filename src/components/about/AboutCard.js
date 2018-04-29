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
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Informasi kontak</Card.Description>
        <Icon name="mail" /> ferdifenrir@gmail.com <br />
        <Icon name="github" /> ferzos <br />
        <Icon name="linkedin" /> ferdinand-chandra-8a7aa011b <br />
      </Card.Content>
    </Card>
  );
}
