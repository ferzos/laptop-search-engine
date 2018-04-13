import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

export default class LandingHeader extends Component {
  render = ({ mobile } = this.props) => (
    <Container text>
      <Header
        as="h1"
        inverted
        icon
        className="text-normal mb-0"
        style={{
          fontSize: mobile ? '2em' : '4em',
          marginTop: mobile ? '1em' : '1.5em',
        }}
      >
        <Icon name="laptop" />
        Mesin Pencari Laptop
      </Header>
      <Header
        as="h2"
        content="Temukan Laptop Terbaikmu."
        inverted
        className="text-normal"
        style={{
          fontSize: mobile ? '1em' : '1.7em',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button
        as={Link}
        to="/search"
        inverted
        size="huge"
        style={{
          fontSize: mobile ? '1em' : '1.5em',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      >
        Mulai
        <Icon name="chevron right" />
      </Button>
    </Container>
  );
}
