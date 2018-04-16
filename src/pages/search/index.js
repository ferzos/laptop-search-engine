import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import Processor from '../../components/search/Processor';

import { ping } from '../../actions';

class Search extends Component {
  componentDidMount() {
    this.props.ping();
  }

  buildSearch() {
    if (this.props.processor === undefined) {
      return <Processor />;
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
