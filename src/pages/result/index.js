// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/fontawesome-free-solid';
// import logo from '../assets/logo.svg';
import React, { Component } from 'react';
import { Grid, Card, Icon, Header, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ResponsiveContainer from '../../components/ResponsiveContainer';

import { resetState } from '../../actions';

class Result extends Component {
  constructor(props) {
    super(props);
    this.API = 'http://eggman.herokuapp.com/api/notebooks';
    this.state = {
      isNoResult: false,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      data: [],
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(this.API, { params: this.props.app })
      .then(function(response) {
        if (response.data.length > 0) {
          self.setState({ data: response.data });
        } else {
          self.setState({ isNoResult: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  formatCurrency(value) {
    return `Rp. ${value.toLocaleString('en').replace(/,/g, '.')}`;
  }

  parsingStorage(value) {
    if (value === '1000' || value === '2000') {
      return `${String(value).charAt(0)} TB`;
    }
    return `${value} GB`;
  }

  buildCard() {
    if (this.state.data.length > 0) {
      const cards = this.state.data.map(
        ({ _id, name, details, brand, price }) => (
          <Card key={_id}>
            <Card.Content header={name} />
            <Card.Content description={details.details} />
            <Card.Content extra>
              {/* <Icon name="server" /> {details.processor} <br />
              <Icon name="microchip" /> {details.ram} GB<br />
              <Icon name="database" /> {this.parsingStorage(details.storage)}<br />
              <Icon name="game" /> {details.vga}<br /> */}
              <Icon name="industry" /> {brand} <br />
              <Icon name="money" /> {this.formatCurrency(price)} <br />
            </Card.Content>
          </Card>
        )
      );

      return (
        <Card.Group itemsPerRow={this.state.isMobile ? 1 : 4}>
          {cards}
        </Card.Group>
      );
    } else if (this.state.isNoResult) {
      return (
        <div className="no-laptop">
          <Header
            as="h3"
            content="Tidak ada laptop dengan spesifikasi yang kamu inginkan"
            className="text-bold"
            size="huge"
            textAlign="center"
          />
          <br />
          <Icon name="frown" size="massive" />
        </div>
      );
    } else {
      return (
        <Loader
          active
          inline="centered"
          content="Sedang memuat..."
          size="huge"
        />
      );
    }
  }

  render = () => (
    <div className="result">
      <ResponsiveContainer>
        <Grid centered container stackable>
          <Grid.Row>
            <Grid.Column width={16}>{this.buildCard()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetState }, dispatch);
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
