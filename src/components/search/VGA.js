import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPUImage from '../../assets/gpu.png';
import { selectGPU } from '../../actions';

class VGA extends Component {
  handleButton = (brand, version = undefined) => {
    let newChosen = this.props.app.vga.slice();
    const vgaObj = { brand, version };

    if (
      newChosen.some(
        vga => vga.brand === vgaObj.brand && vga.version === vgaObj.version
      )
    ) {
      const filteredChosen = newChosen.filter(
        vga => vga.version !== vgaObj.version
      );
      this.props.selectGPU(filteredChosen);
    } else {
      newChosen.push(vgaObj);
      this.props.selectGPU(newChosen);
    }
  };

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
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'amd' && vga.version === 'r5'
                    )}
                    label="Radeon R5"
                    toggle
                    onClick={() => this.handleButton('amd', 'r5')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'amd' && vga.version === 'r6'
                    )}
                    label="Radeon R6"
                    toggle
                    onClick={() => this.handleButton('amd', 'r6')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'amd' && vga.version === 'r7'
                    )}
                    label="Radeon R7"
                    toggle
                    onClick={() => this.handleButton('amd', 'r7')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'amd' && vga.version === 'r8'
                    )}
                    label="Radeon R8"
                    toggle
                    onClick={() => this.handleButton('amd', 'r8')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'amd' && vga.version === undefined
                    )}
                    label="Radeon lainnya"
                    toggle
                    onClick={() => this.handleButton('amd')}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'nvidia' && vga.version === 'gt'
                    )}
                    label="Nvidia GT"
                    toggle
                    onClick={() => this.handleButton('nvidia', 'gt')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'nvidia' && vga.version === 'gtx'
                    )}
                    label="Nvidia GTX"
                    toggle
                    onClick={() => this.handleButton('nvidia', 'gtx')}
                  />
                  <br />
                  <br />
                  <Checkbox
                    checked={this.props.app.vga.some(
                      vga => vga.brand === 'nvidia' && vga.version === undefined
                    )}
                    label="Nvidia lainnya"
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
  return bindActionCreators({ selectGPU }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VGA);
