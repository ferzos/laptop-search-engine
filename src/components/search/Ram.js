import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RamImage from '../../assets/ram.png';
import { selectRam } from '../../actions';

class Ram extends Component {
  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic size="massive">
            <Header as="h3" content="RAM" className="text-bold" size="huge" />
            <p>
              <i>Random Access Memory</i> adalah suatu penyimpanan data yang
              digunakan dalam komputer, umumnya terletak di <i>motherboard</i>.
              Memori ini hanya sementara menyimpan data dan semua informasi yang
              disimpan dalam RAM akan hilang ketika komputer dimatikan.
              <br />
              <a
                className="text-sm"
                href="https://www.techopedia.com/definition/24491/random-access-memory-ram"
              >
                <i>
                  https://www.techopedia.com/definition/24491/random-access-memory-ram
                </i>
              </a>
            </p>
            <Image src={RamImage} alt="processor" size="medium" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8} verticalAlign="middle">
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Pilih ukuran RAMmu"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button
                content="2 GB"
                size="massive"
                onClick={() => this.props.selectRam('2')}
              />
              <Button
                content="4 GB"
                size="massive"
                onClick={() => this.props.selectRam('4')}
              />
              <Button
                content="8 GB"
                size="massive"
                onClick={() => this.props.selectRam('8')}
              />
              <Button
                content="16 GB"
                size="massive"
                onClick={() => this.props.selectRam('16')}
              />
            </Button.Group>
          </Segment>
          <Button
            content="Tidak ada preferensi"
            size="massive"
            onClick={() => this.props.selectRam('')}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRam }, dispatch);
}

export default connect('', mapDispatchToProps)(Ram);
