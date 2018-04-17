import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HDDImage from '../../assets/hdd.png';
import { selectStorage } from '../../actions';

class Storage extends Component {
  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic size="massive">
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
            <Image src={HDDImage} alt="processor" size="medium" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8} verticalAlign="middle">
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Pilih kapasitas HDDmu"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button
                content="256 GB"
                size="massive"
                onClick={() => this.props.selectStorage('256')}
              />
              <Button
                content="500 GB"
                size="massive"
                onClick={() => this.props.selectStorage('500')}
              />
              <Button
                content="512 GB"
                size="massive"
                onClick={() => this.props.selectStorage('512')}
              />
              <Button
                content="1 TB"
                size="massive"
                onClick={() => this.props.selectStorage('1000')}
              />
              <Button
                content="2 TB"
                size="massive"
                onClick={() => this.props.selectStorage('2000')}
              />
            </Button.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStorage }, dispatch);
}

export default connect('', mapDispatchToProps)(Storage);
