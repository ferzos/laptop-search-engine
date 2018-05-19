import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Grid, Segment } from 'semantic-ui-react';
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
    this.state = {
      activeItem: 'Processor',
    };
  }

  componentDidMount() {
    axios.get(`${this.API}/ping`);
  }

  buildSearch() {
    if (this.state.activeItem === 'Processor') {
      return <Processor />;
    } else if (this.state.activeItem === 'Ram') {
      return <Ram />;
    } else if (this.state.activeItem === 'GPU') {
      return <VGA />;
    } else if (this.state.activeItem === 'Storage') {
      return <Storage />;
    } else if (this.state.activeItem === 'SSD') {
      return <SSD />;
    } else if (this.state.activeItem === 'Brand') {
      return <Brand />;
    } else if (this.state.activeItem === 'Price') {
      return <Price />;
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render = () => (
    <div className="search">
      <ResponsiveContainer>
        <Grid className="search-container" centered container stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Menu pointing>
                <Menu.Item
                  name="Processor"
                  active={this.state.activeItem === 'Processor'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Ram"
                  active={this.state.activeItem === 'Ram'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Storage"
                  active={this.state.activeItem === 'Storage'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="GPU"
                  active={this.state.activeItem === 'GPU'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Brand"
                  active={this.state.activeItem === 'Brand'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Price"
                  active={this.state.activeItem === 'Price'}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item name="Cari" />
                </Menu.Menu>
              </Menu>
              <Segment>{this.buildSearch()}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(Search);
