import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Grid, Segment, Label, Icon } from 'semantic-ui-react';
import axios from 'axios';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import Processor from '../../components/search/Processor';
import Ram from '../../components/search/Ram';
import Storage from '../../components/search/Storage';
import VGA from '../../components/search/VGA';
import Brand from '../../components/search/Brand';
import Price from '../../components/search/Price';

import {
  selectProcessor,
  selectRam,
  selectStorage,
  selectSSD,
  selectGPUBrand,
  selectGPUVersion,
  selectBrand,
} from '../../actions';

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

  buildProcessorLabel() {
    return this.props.app.processor.map((processor, i) => (
      <Label key={i} size="medium">
        <Icon name="server" />Processor: {processor}
        <Icon
          name="close"
          onClick={() => this.handleClose('processor', processor)}
        />
      </Label>
    ));
  }

  buildRamLabel() {
    return this.props.app.ram.map((ram, i) => (
      <Label key={i} size="medium">
        <Icon name="microchip" />RAM: {`${ram} GB`}
        <Icon name="close" onClick={() => this.handleClose('ram', ram)} />
      </Label>
    ));
  }

  buildStorageLabel() {
    return this.props.app.storage.map((storage, i) => (
      <Label key={i} size="medium">
        <Icon name="database" />Storage: {`${storage} GB`}
        <Icon
          name="close"
          onClick={() => this.handleClose('storage', storage)}
        />
      </Label>
    ));
  }

  buildSSDLabel() {
    return this.props.app.ssd ? (
      <Label size="medium">
        SSD<Icon name="close" onClick={() => this.handleClose('ssd', false)} />
      </Label>
    ) : (
      ''
    );
  }

  buildVGALabel() {
    if (this.props.app.vgaVersion.length === 0) {
      return this.props.app.vgaBrand.map((vgaBrand, i) => (
        <Label key={i} size="medium">
          <Icon name="game" />GPU: {`${vgaBrand} apapun`}
          <Icon
            name="close"
            onClick={() => this.handleClose('vgaBrand', vgaBrand)}
          />
        </Label>
      ));
    } else {
      return this.props.app.vgaVersion.map((vgaVersion, i) => (
        <Label key={i} size="medium">
          <Icon name="game" />GPU: {`${vgaVersion}`}
          <Icon
            name="close"
            onClick={() => this.handleClose('vgaVersion', vgaVersion)}
          />
        </Label>
      ));
    }
  }

  buildBrandLabel() {
    return this.props.app.brand.map((brand, i) => (
      <Label key={i} size="medium">
        <Icon name="industry" />Brand: {`${brand}`}
        <Icon name="close" onClick={() => this.handleClose('brand', brand)} />
      </Label>
    ));
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
      return <Price />;
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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

  render = () => (
    <div className="search">
      <ResponsiveContainer>
        <Grid className="search-container" centered container stackable>
          {this.buildProcessorLabel()}
          {this.buildRamLabel()}
          {this.buildStorageLabel()}
          {this.buildSSDLabel()}
          {this.buildVGALabel()}
          {this.buildBrandLabel()}
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
                {/* <Menu.Menu position="right">
                  <Menu.Item>
                    <Icon name="search" />
                  </Menu.Item>
                </Menu.Menu> */}
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
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
