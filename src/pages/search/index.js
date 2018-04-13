import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResponsiveContainer from '../../components/ResponsiveContainer';

import { ping } from '../../actions';

class Search extends Component {
  componentDidMount() {
    this.props.ping();
  }

  buildSearch() {
    return (
      <Grid centered container stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header as="h3" content="Processor" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <Button content="Intel i3" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
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
