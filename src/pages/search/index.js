import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import Processor from '../../components/search/Processor';
import Ram from '../../components/search/Ram';
import Storage from '../../components/search/Storage';
import VGA from '../../components/search/VGA';
import SSD from '../../components/search/SSD';

import { ping } from '../../actions';

class Search extends Component {
  componentDidMount() {
    this.props.ping();
  }

  buildSearch() {
    if (this.props.app.processor === undefined) {
      return <Processor />;
    } else if (this.props.app.ram === undefined) {
      return <Ram />;
    } else if (this.props.app.storage === undefined) {
      return <Storage />;
    } else if (this.props.app.vga === undefined) {
      return <VGA />;
    } else if (this.props.app.ssd === undefined) {
      return <SSD />;
    } else if (this.props.app.brand === undefined) {
      return null;
    } else if (this.props.app.price === undefined) {
      return null;
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ping }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
