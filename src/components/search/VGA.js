import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPUImage from '../../assets/gpu.png';
import { selectGPU } from '../../actions';

class VGA extends Component {
  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic size="massive">
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
        <Grid.Column width={8} verticalAlign="middle">
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Pilih GPUmu"
              className="text-bold"
              size="large"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Button.Group vertical>
                <Button
                  content="Intel HD"
                  size="massive"
                  onClick={() => this.props.selectGPU('Intel HD')}
                />
                <Button
                  content="Yang penting Radeon"
                  size="massive"
                  onClick={() => this.props.selectGPU('Radeon')}
                />
                <Button
                  content="Radeon R5"
                  size="massive"
                  onClick={() => this.props.selectGPU('Radeon R5')}
                />
                <Button
                  content="Radeon R6"
                  size="massive"
                  onClick={() => this.props.selectGPU('Radeon R6')}
                />
                <Button
                  content="Radeon R7"
                  size="massive"
                  onClick={() => this.props.selectGPU('Radeon R7')}
                />
                <Button
                  content="Radeon R8"
                  size="massive"
                  onClick={() => this.props.selectGPU('Radeon R8')}
                />
              </Button.Group>
              <Button.Group vertical>
                <Button
                  content="Yang penting Nvidia"
                  size="massive"
                  onClick={() => this.props.selectGPU('Nvidia')}
                />
                <Button
                  content="Nvidia GT"
                  size="massive"
                  onClick={() => this.props.selectGPU('Nvidia GT')}
                />
                <Button
                  content="Nvidia GTX"
                  size="massive"
                  onClick={() => this.props.selectGPU('Nvidia GTX')}
                />
              </Button.Group>
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGPU }, dispatch);
}

export default connect('', mapDispatchToProps)(VGA);