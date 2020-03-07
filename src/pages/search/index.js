import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Grid, Segment, Label, Icon, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import Processor from '../../components/search/Processor';
import Ram from '../../components/search/Ram';
import Storage from '../../components/search/Storage';
import VGA from '../../components/search/VGA';
import Brand from '../../components/search/Brand';
import Price from '../../components/search/Price';
import VerticalStepper from '../../components/search/VerticalStepper';

import {
  selectProcessor,
  selectRam,
  selectStorage,
  selectSSD,
  selectGPUBrand,
  selectGPUVersion,
  selectBrand,
  selectMaxPrice,
} from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.API = 'http://eggman.herokuapp.com/api';
    this.state = {
      activeItem: 'Processor',
      // Price
      max: Number(window.sessionStorage.getItem('maxPrice')) || 0,
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
    } else if (this.state.activeItem === 'Brand') {
      return <Brand />;
    } else if (this.state.activeItem === 'Price') {
      return (
        <Price price={this.state.max} onPriceChange={this.handlePriceChange} />
      );
    }
  }

  handleItemClick = name => () => this.setState({ activeItem: name });

  handleClose(type, data) {
    switch (type) {
      case 'processor':
        let newProcessor = this.props.app.processor.slice();
        const filteredProcessor = newProcessor.filter(
          processor => processor !== data
        );
        this.props.selectProcessor(filteredProcessor);
        break;
      case 'ram':
        let newRam = this.props.app.ram.slice();
        const filteredRam = newRam.filter(ram => ram !== data);
        this.props.selectRam(filteredRam);
        break;
      case 'storage':
        let newStorage = this.props.app.storage.slice();
        const filteredStorage = newStorage.filter(storage => storage !== data);
        this.props.selectStorage(filteredStorage);
        break;
      case 'ssd':
        this.props.selectSSD(false);
        break;
      case 'vgaBrand':
        this.props.selectGPUBrand([]);
        break;
      case 'vgaVersion':
        let newChosenVersion = this.props.app.vgaVersion.slice();
        const filteredChosen = newChosenVersion.filter(
          version2 => version2 !== data
        );
        this.props.selectGPUVersion(filteredChosen);
        break;
      case 'brand':
        let newBrand = this.props.app.brand.slice();
        const filteredBrand = newBrand.filter(brand => brand !== data);
        this.props.selectBrand(filteredBrand);
        break;
      default:
        break;
    }
  }

  handlePriceChange = value => {
    window.sessionStorage.setItem('maxPrice', value);
    this.setState({
      max: value,
    });
  };

  render = () => (
    <div className="search">
      <ResponsiveContainer>
        <Grid className="search-container" centered container stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <VerticalStepper
                handlePriceChange={this.handlePriceChange}
                price={this.state.max}
                activeMenu={this.state.activeItem}
                handleMenuClick={this.handleItemClick}
              />
              <Button
                fluid
                icon
                labelPosition="left"
                as={Link}
                className="button-search"
                to="/hasil"
                size="massive"
                color="blue"
                onClick={() => this.props.selectMaxPrice(this.state.max)}
              >
                <Icon className="icon" name="search" />
                Cari
              </Button>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment>{this.buildSearch()}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectProcessor,
      selectRam,
      selectStorage,
      selectSSD,
      selectGPUBrand,
      selectGPUVersion,
      selectBrand,
      selectMaxPrice,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Search);
