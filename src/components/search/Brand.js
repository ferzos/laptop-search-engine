import React, { Component } from 'react';
import { Grid, Header, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { selectBrand } from '../../actions';

class Brand extends Component {
  constructor(props) {
    super(props);
    this.API = 'http://eggman.herokuapp.com/api';
    this.state = {
      brands: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${this.API}/brand`)
      .then(resp => {
        this.setState({ brands: resp.data });
      })
      .then(err => {
        console.log(err);
      });
  }

  buildButton() {
    if (this.state.brands.length === 0) {
      return (
        <Header
          as="h3"
          content="Sedang Memuat..."
          className="text-bold"
          size="huge"
          textAlign="center"
        />
      );
    } else {
      return this.state.brands.map((brand, i) => (
        <Button
          key={i}
          content={brand}
          size="massive"
          onClick={() => this.props.selectBrand(brand)}
        />
      ));
    }
  }

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Merek"
              className="text-bold"
              size="huge"
              textAlign="center"
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>{this.buildButton()}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBrand }, dispatch);
}

export default connect('', mapDispatchToProps)(Brand);
