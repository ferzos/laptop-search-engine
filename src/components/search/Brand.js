import React, { Component } from 'react';
import { Grid, Header, Segment, Checkbox } from 'semantic-ui-react';
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

  handleButton = data => {
    let newChosen = this.props.app.brand.slice();

    if (newChosen.includes(data)) {
      const filteredChosen = newChosen.filter(brand => brand !== data);
      this.props.selectBrand(filteredChosen);
    } else {
      newChosen.push(data);
      this.props.selectBrand(newChosen);
    }
  };

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
          as="h2"
          content="Sedang Memuat..."
          className="text-bold"
          size="huge"
          textAlign="center"
        />
      );
    } else {
      return this.state.brands.map((brand, i) => (
        <React.Fragment key={i}>
          <Checkbox
            toggle
            checked={this.props.app.brand.includes(brand)}
            label={brand}
            onClick={() => this.handleButton(brand)}
          />
          <br />
          <br />
        </React.Fragment>
      ));
    }
  }

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment basic size="massive">
            <Header
              as="h2"
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

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBrand }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brand);
