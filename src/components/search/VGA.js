import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPUImage from '../../assets/gpu.png';
import { selectGPU } from '../../actions';

class VGA extends Component {
  handleButton = data => {
    let newChosen = this.props.app.vga.slice();

    if (newChosen.includes(data)) {
      const filteredChosen = newChosen.filter(vga => vga !== data);
      this.props.selectGPU(filteredChosen);
    } else {
      newChosen.push(data);
      this.props.selectGPU(newChosen);
    }
  };

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h3" content="GPU" className="text-bold" size="huge" />
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
            <Image src={GPUImage} alt="processor" size="small" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic vertical textAlign="center">
            <Header
              as="h3"
              content="Pilih GPUmu"
              className="text-bold"
              size="large"
            />
            <Grid centered container stackable>
              <Grid.Row>
                <Grid.Column width={8} textAlign="center">
                  <Button.Group vertical>
                    <Button
                      content="Radeon apapun"
                      onClick={() => this.props.selectGPU('Radeon')}
                    />
                    <Button
                      content="Radeon R5"
                      onClick={() => this.props.selectGPU('Radeon R5')}
                    />
                    <Button
                      content="Radeon R6"
                      onClick={() => this.props.selectGPU('Radeon R6')}
                    />
                    <Button
                      content="Radeon R7"
                      onClick={() => this.props.selectGPU('Radeon R7')}
                    />
                    <Button
                      content="Radeon R8"
                      onClick={() => this.props.selectGPU('Radeon R8')}
                    />
                  </Button.Group>
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                  <Button.Group vertical>
                    <Button
                      content="Nvidia apapun"
                      onClick={() => this.props.selectGPU('Nvidia')}
                    />
                    <Button
                      content="Nvidia GT"
                      onClick={() => this.props.selectGPU('GT')}
                    />
                    <Button
                      content="Nvidia GTX"
                      onClick={() => this.props.selectGPU('GTX')}
                    />
                  </Button.Group>
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

export default connect(mapStateToProps, mapDispatchToProps)(VGA);
