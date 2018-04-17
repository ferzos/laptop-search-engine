import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SSDImage from '../../assets/ssd.png';
import { selectSSD } from '../../actions';

class SSD extends Component {
  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic size="massive">
            <Header as="h3" content="SSD" className="text-bold" size="huge" />
            <p>
              <i>Solid State Drive</i> adalah media penyimpanan elektronik yang
              dibangun dengan arsitektur dimana data disimpan secara elektronik
              pada chip memori. Berbeda dengan HDD, SSD adalah perangkat
              penyimpanan elektronik sepenuhnya, dan unit fisiknya tidak
              mengandung benda-benda mekanis.
              <br />
              <a
                className="text-sm"
                href="https://www.techopedia.com/definition/2296/solid-state-drive-ssd"
              >
                <i>
                  https://www.techopedia.com/definition/2296/solid-state-drive-ssd
                </i>
              </a>
            </p>
            <Image src={SSDImage} alt="processor" size="medium" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8} verticalAlign="middle">
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Apakah kamu butuh SSD?"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button
                content="Ya"
                size="massive"
                onClick={() => this.props.selectSSD(true)}
              />
              <Button
                content="Tidak"
                size="massive"
                onClick={() => this.props.selectSSD(false)}
              />
            </Button.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSSD }, dispatch);
}

export default connect('', mapDispatchToProps)(SSD);
