import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPUImage from '../../assets/gpu.png';
import { selectGPUBrand, selectGPUVersion } from '../../actions';

class VGA extends Component {
  handleButton = (brand, version = undefined) => {
    // let newChosenBrand = this.props.app.vgaBrand.slice();
    let newChosenVersion = this.props.app.vgaVersion.slice();

    if (version === undefined) {
      // if (brand == 'nvidia') {
      //   const filteredChosen = newChosenVersion.filter(version2 => version2 !== 'gt' || version2 !== 'gtx');
      //   this.props.selectGPUVersion(filteredChosen);
      // } else {
      //   const filteredChosen = newChosenVersion.filter(version2 => version2 !== 'r5' || version2 !== 'r6' || version2 !== 'r7' || version2 !== 'r8');
      //   this.props.selectGPUVersion(filteredChosen);
      // }
      this.props.selectGPUVersion([]);
      // if (newChosenBrand.includes(brand)) {
      //   const filteredChosen = newChosenBrand.filter(brand2 => brand2 !== brand);
      //   this.props.selectGPUBrand(filteredChosen);
      // } else {
      //   newChosenBrand.push(brand);
      //   this.props.selectGPUBrand(newChosenBrand);
      // }
      this.props.selectGPUBrand([brand]);
    } else {
      if (newChosenVersion.includes(version)) {
        const filteredChosen = newChosenVersion.filter(
          version2 => version2 !== version
        );
        this.props.selectGPUVersion(filteredChosen);
      } else {
        newChosenVersion.push(version);
        this.props.selectGPUVersion(newChosenVersion);
      }
      this.props.selectGPUBrand(this.chooseBrand(version));
    }
  };

  chooseBrand(version) {
    let newBrand = this.props.app.vgaBrand.slice();
    if (version === 'gt' || version === 'gtx') newBrand.push('nvidia');
    if (
      version === 'r5' ||
      version === 'r6' ||
      version === 'r7' ||
      version === 'r8'
    )
      newBrand.push('amd');
    return newBrand;
  }

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h2" content="GPU" className="text-bold" size="huge" />
            <p>
              <i>Graphics Processing Unit</i> adalah prosesor chip tunggal yang
              terutama digunakan untuk mengelola dan meningkatkan kinerja video
              dan grafik. GPU digunakan untuk grafika 2D atau 3D, pemetaan
              tekstur, perangkat lunak grafis dengan intensitas tinggi seperti
              AutoCAD, dsb.
              <br />
              <a
                className="text-sm"
                href="https://www.techopedia.com/definition/24862/graphics-processing-unit-gpu"
              >
                <i>
                  https://www.techopedia.com/definition/24862/graphics-processing-unit-gpu
                </i>
              </a>
            </p>
            <Image src={GPUImage} alt="gpu" size="small" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic vertical>
            <Header
              as="h2"
              content="Pilih GPUmu"
              className="text-bold"
              size="large"
            />
            <Grid centered container stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r5')}
                    label="Radeon R5"
                    toggle
                    onClick={() => this.handleButton('amd', 'r5')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r6')}
                    label="Radeon R6"
                    toggle
                    onClick={() => this.handleButton('amd', 'r6')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r7')}
                    label="Radeon R7"
                    toggle
                    onClick={() => this.handleButton('amd', 'r7')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r8')}
                    label="Radeon R8"
                    toggle
                    onClick={() => this.handleButton('amd', 'r8')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={
                      this.props.app.vgaBrand.includes('amd') &&
                      this.props.app.vgaVersion.length === 0
                    }
                    label="Radeon apapun"
                    toggle
                    onClick={() => this.handleButton('amd')}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('gt')}
                    label="Nvidia GT"
                    toggle
                    onClick={() => this.handleButton('nvidia', 'gt')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('gtx')}
                    label="Nvidia GTX"
                    toggle
                    onClick={() => this.handleButton('nvidia', 'gtx')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={
                      this.props.app.vgaBrand.includes('nvidia') &&
                      this.props.app.vgaVersion.length === 0
                    }
                    label="Nvidia apapun"
                    toggle
                    onClick={() => this.handleButton('nvidia')}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
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
  return bindActionCreators({ selectGPUBrand, selectGPUVersion }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VGA);
