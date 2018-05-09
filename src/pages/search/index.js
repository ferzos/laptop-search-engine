import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import Processor from '../../components/search/Processor';
import Ram from '../../components/search/Ram';
import Storage from '../../components/search/Storage';
import VGA from '../../components/search/VGA';
import SSD from '../../components/search/SSD';
import Brand from '../../components/search/Brand';
import Price from '../../components/search/Price';

class Search extends Component {
  constructor(props) {
    super(props);
    this.API = 'http://eggman.herokuapp.com/api';
  }

  componentDidMount() {
    axios.get(`${this.API}/ping`);
  }

  buildSearch() {
    if (this.props.app.processor === undefined) {
      return <Processor />;
    } else if (this.props.app.ram === undefined) {
      return <Ram />;
    } else if (this.props.app.vga === undefined) {
      return <VGA />;
    } else if (this.props.app.storage === undefined) {
      return <Storage />;
    } else if (this.props.app.ssd === undefined) {
      return <SSD />;
    } else if (this.props.app.brand === undefined) {
      return <Brand />;
    } else if (this.props.app.price === undefined) {
      return <Price />;
    }
  }

  render = () => (
    <div className="search">
      <ResponsiveContainer>{this.buildSearch()}</ResponsiveContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(Search);
