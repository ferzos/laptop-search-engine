import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPUImage from '../../assets/gpu.png';
import { selectGPUBrand, selectGPUVersion } from '../../actions';

class VGA extends Component {
  noAMD = () => {
    const { vgaVersion } = this.props.app;

    return (
      !vgaVersion.includes('r5') &&
      !vgaVersion.includes('r6') &&
      !vgaVersion.includes('r7') &&
      !vgaVersion.includes('r8')
    );
  };

  noNvidia = () => {
    const { vgaVersion } = this.props.app;

    return !vgaVersion.includes('gt') && !vgaVersion.includes('gtx');
  };

  getFilteredGPUVersion = brand => {
    if (brand === 'amd') {
      return this.props.app.vgaVersion
        .slice()
        .filter(
          version =>
            version !== 'r5' &&
            version !== 'r6' &&
            version !== 'r7' &&
            version !== 'r8'
        );
    } else if (brand === 'nvidia') {
      return this.props.app.vgaVersion
        .slice()
        .filter(version => version !== 'gt' && version !== 'gtx');
    }
  };

  handleButton = (brand, version = undefined) => (e, data) => {
    const { vgaBrand, vgaVersion } = this.props.app;
    const { checked } = data;

    // If user choose any vga brand
    if (version === undefined) {
      if (checked) {
        this.props.selectGPUBrand([...vgaBrand, brand]);
        this.props.selectGPUVersion(this.getFilteredGPUVersion(brand));
      } else if (!checked) {
        this.props.selectGPUBrand(vgaBrand.filter(brand2 => brand2 !== brand));
      }
    } else {
      // user checked box
      if (checked) {
        this.props.selectGPUBrand([...vgaBrand, brand]);
        this.props.selectGPUVersion([...vgaVersion, version]);
      } else if (!checked) {
        const newGPUVersion = vgaVersion.filter(
          version2 => version2 !== version
        );
        this.props.selectGPUVersion(newGPUVersion);

        if (newGPUVersion.length === 0) {
          this.props.selectGPUBrand(
            vgaBrand.filter(brand2 => brand2 !== brand)
          );
        }
      }
    }
  };

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
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
                    onClick={this.handleButton('amd', 'r5')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r6')}
                    label="Radeon R6"
                    toggle
                    onClick={this.handleButton('amd', 'r6')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r7')}
                    label="Radeon R7"
                    toggle
                    onClick={this.handleButton('amd', 'r7')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('r8')}
                    label="Radeon R8"
                    toggle
                    onClick={this.handleButton('amd', 'r8')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={
                      this.props.app.vgaBrand.includes('amd') && this.noAMD()
                    }
                    label="Radeon apapun"
                    toggle
                    onClick={this.handleButton('amd')}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('gt')}
                    label="Nvidia GT"
                    toggle
                    onClick={this.handleButton('nvidia', 'gt')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vgaVersion.includes('gtx')}
                    label="Nvidia GTX"
                    toggle
                    onClick={this.handleButton('nvidia', 'gtx')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={
                      this.props.app.vgaBrand.includes('nvidia') &&
                      this.noNvidia()
                    }
                    label="Nvidia apapun"
                    toggle
                    onClick={this.handleButton('nvidia')}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h2" content="GPU" className="text-bold" size="huge" />
            <p className="text-lg">
              <i>Graphics Processing Unit</i> adalah prosesor chip tunggal yang
              terutama digunakan untuk mengelola dan meningkatkan kinerja video
              dan grafik. GPU digunakan untuk grafika 2D atau 3D, pemetaan
              tekstur, perangkat lunak grafis dengan intensitas tinggi seperti
              AutoCAD, dsb.
              <br />
              <a
                className="text-md"
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

export default connect(mapStateToProps, mapDispatchToProps)(VGA);
