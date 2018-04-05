import React, { Component } from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

export default class LandingHeader extends Component {
  render() {
    return (
      <Container fluid>
        <Header as="h1" textAlign="center" inverted icon>
          <Icon name="laptop" />
          {this.props.text}
          <Header.Subheader>{this.props.subtext}</Header.Subheader>
        </Header>
      </Container>
    );
  }
}
