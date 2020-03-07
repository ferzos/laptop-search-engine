import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Price extends Component {
  formatCurrency(value) {
    return `Rp. ${value.toLocaleString('en').replace(/,/g, '.')}`;
  }

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment basic size="massive">
            <Header
              as="h2"
              content="Harga"
              className="text-bold"
              size="huge"
              textAlign="center"
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header
            as="h2"
            content="Berapa harga maksimal laptopmu?"
            className="text-bold"
            size="huge"
            textAlign="center"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Slider
            min={2000000}
            max={21000000}
            step={1000000}
            value={this.props.price}
            tooltip={false}
            onChange={this.props.onPriceChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header
            as="h2"
            content={
              this.props.price === 21000000
                ? 'Rp 20.000.000++'
                : this.formatCurrency(this.props.price)
            }
            className="text-bold"
            size="huge"
            textAlign="center"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Price;
