import React, { Component } from 'react';
import { Grid, Header, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { selectMaxPrice } from '../../actions';

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 2000000,
    };
  }

  handleOnChange = value => {
    this.setState({
      max: value,
    });
  };

  formatCurrency(value) {
    return `Rp. ${value.toLocaleString('en').replace(/,/g, '.')}`;
  }

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment basic size="massive">
            <Header
              as="h3"
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
            as="h3"
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
            max={96000000}
            step={1000000}
            value={this.state.max}
            tooltip={false}
            onChange={this.handleOnChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header
            as="h3"
            content={this.formatCurrency(this.state.max)}
            className="text-bold"
            size="huge"
            textAlign="center"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16} textAlign="center">
          <Button
            as={Link}
            className="button-search"
            to="/result"
            content="Cari laptopku"
            size="massive"
            onClick={() => this.props.selectMaxPrice(this.state.max)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMaxPrice }, dispatch);
}

export default connect('', mapDispatchToProps)(Brand);
