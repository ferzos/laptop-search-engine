import React, { Component } from 'react';
import { Card, Icon, Header } from 'semantic-ui-react';

export default class AboutCard extends Component {
  render = () => (
    <Card>
      {/* <Image src={ProfilePicture} />
      <Card.Content>
        <Card.Header>Ferdinand Chandra</Card.Header>
        <Card.Meta>
          <span className="color-primary">Frontend Engineer</span>
        </Card.Meta>
      </Card.Content> */}
      <Card.Content>
        <Header as="h3">
          <Icon name="mail" />
          ferdifenrir@gmail.com
        </Header>
        {/* <Header as='h3' >
          <Icon name="github" /> 
          ferzos
        </Header>
        <Header as='h3' >
          <Icon name="linkedin" /> 
          ferdinand-chandra-8a7aa011b
        </Header> */}
      </Card.Content>
    </Card>
  );
}
