import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HDDImage from '../../assets/hdd.png';
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

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h3" content="HDD" className="text-bold" size="huge" />
            <p>
              <i>Hard Disk Drive</i> adalah perangkat penyimpanan komputer yang
              berisi piringan magnet yang berputar pada kecepatan tinggi. HDD
              merupakan perangkat penyimpanan sekunder yang digunakan untuk
              menyimpan data secara permanen. Data yang disimpan pada HDD tidak
              akan hilang saat komputer dimatikan.
              <br />
              <a
                className="text-sm"
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
        <Grid.Column width={8}>
          <Segment basic vertical textAlign="center">
            <Header
              as="h3"
              content="Pilih kapasitas HDDmu"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button
                active={this.props.app.storage.includes(256)}
                content="256 GB"
                onClick={() => this.handleButton(256)}
              />
              <Button
                active={this.props.app.storage.includes(512)}
                content="512 GB"
                onClick={() => this.handleButton(512)}
              />
              <Button
                active={this.props.app.storage.includes(1000)}
                content="1 TB"
                onClick={() => this.handleButton(1000)}
              />
              <Button
                active={this.props.app.storage.includes(2000)}
                content="2 TB"
                onClick={() => this.handleButton(2000)}
              />
            </Button.Group>
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
  return bindActionCreators({ selectStorage, selectSSD }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Storage);
