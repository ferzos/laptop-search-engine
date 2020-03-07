import React, { Component } from 'react';
import {
  Grid,
  Header,
  Segment,
  Image,
  Checkbox,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HDDImage from '../../assets/hdd.png';
import SSDImage from '../../assets/ssd.png';
import { selectStorage } from '../../actions';
import { selectSSD } from '../../actions';

class Storage extends Component {
  handleButton = data => {
    let newChosen = this.props.app.storage.slice();

    if (newChosen.includes(data)) {
      const filteredChosen = newChosen.filter(storage => storage !== data);
      this.props.selectStorage(filteredChosen);
    } else {
      newChosen.push(data);
      this.props.selectStorage(newChosen);
      this.props.selectSSD(false);
    }
  };

  buildSSDSegment() {
    if (this.props.app.storage.length > 0) {
      return (
        <Grid centered container stackable>
          <Grid.Row>
            <Grid.Column width={5} textAlign="center">
              <Segment basic>
                <Header
                  as="h2"
                  content="Apakah kamu butuh SSD?"
                  className="text-bold"
                  size="large"
                />
                <Button.Group vertical>
                  <Button
                    active={this.props.app.ssd === true}
                    content="Ya"
                    onClick={() => this.props.selectSSD(true)}
                  />
                  <Button
                    active={this.props.app.ssd === false}
                    content="Tidak"
                    onClick={() => this.props.selectSSD(false)}
                  />
                </Button.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column width={11}>
              <Segment basic>
                <Header
                  as="h2"
                  content="SSD"
                  className="text-bold"
                  size="huge"
                />
                <p>
                  <i>Solid State Drive</i> adalah media penyimpanan elektronik
                  yang dibangun dengan arsitektur dimana data disimpan secara
                  elektronik pada chip memori. Berbeda dengan HDD, SSD adalah
                  perangkat penyimpanan elektronik sepenuhnya, dan unit fisiknya
                  tidak mengandung benda-benda mekanis.
                  <br />
                  <a
                    className="text-md"
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
          </Grid.Row>
        </Grid>
      );
    }
  }

  render = () => (
    <React.Fragment>
      <Grid centered container stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Segment basic vertical>
              <Header
                as="h2"
                content="Pilih kapasitas HDDmu"
                className="text-bold"
                size="large"
              />
              <Checkbox
                toggle
                checked={this.props.app.storage.includes(256)}
                label="256 GB"
                onClick={() => this.handleButton(256)}
              />
              <br />
              <br />
              <Checkbox
                toggle
                checked={this.props.app.storage.includes(512)}
                label="512 GB"
                onClick={() => this.handleButton(512)}
              />
              <br />
              <br />
              <Checkbox
                toggle
                checked={this.props.app.storage.includes(1000)}
                label="1 TB"
                onClick={() => this.handleButton(1000)}
              />
              <br />
              <br />
              <Checkbox
                toggle
                checked={this.props.app.storage.includes(2000)}
                label="2 TB"
                onClick={() => this.handleButton(2000)}
              />
              <br />
              <br />
            </Segment>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment basic>
              <Header as="h2" content="HDD" className="text-bold" size="huge" />
              <p className="text-lg">
                <i>Hard Disk Drive</i> adalah perangkat penyimpanan komputer
                yang berisi piringan magnet yang berputar pada kecepatan tinggi.
                HDD merupakan perangkat penyimpanan sekunder yang digunakan
                untuk menyimpan data secara permanen. Data yang disimpan pada
                HDD tidak akan hilang saat komputer dimatikan.
                <br />
                <a
                  className="text-md"
                  href="https://www.techopedia.com/definition/5288/hard-disk-drive"
                >
                  <i>
                    https://www.techopedia.com/definition/5288/hard-disk-drive
                  </i>
                </a>
              </p>
              <Image src={HDDImage} alt="hdd" size="small" />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {this.buildSSDSegment()}
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStorage, selectSSD }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
