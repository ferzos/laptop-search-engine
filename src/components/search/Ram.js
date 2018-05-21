import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RamImage from '../../assets/ram.png';
import { selectRam } from '../../actions';

class Ram extends Component {
  handleButton = data => {
    let newChosen = this.props.app.ram.slice();

    if (newChosen.includes(data)) {
      const filteredChosen = newChosen.filter(ram => ram !== data);
      this.props.selectRam(filteredChosen);
    } else {
      newChosen.push(data);
      this.props.selectRam(newChosen);
    }
  };

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h3" content="Ram" className="text-bold" size="huge" />
            <p className="text-md text-wrap">
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
            <Image src={RamImage} alt="ram" size="medium" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic vertical textAlign="center">
            <Header
              as="h3"
              content="Pilih ukuran RAMmu"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button
                active={this.props.app.ram.includes(2)}
                content="2 GB"
                onClick={() => this.handleButton(2)}
              />
              <Button
                active={this.props.app.ram.includes(4)}
                content="4 GB"
                onClick={() => this.handleButton(4)}
              />
              <Button
                active={this.props.app.ram.includes(8)}
                content="8 GB"
                onClick={() => this.handleButton(8)}
              />
              <Button
                active={this.props.app.ram.includes(16)}
                content="16 GB"
                onClick={() => this.handleButton(16)}
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
  return bindActionCreators({ selectRam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Ram);
