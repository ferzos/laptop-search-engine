import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RamImage from '../../assets/ram.png';
import { selectRam } from '../../actions';

const ramOptions = [
  { label: '2GB', id: 2 },
  { label: '4GB', id: 4 },
  { label: '8GB', id: 8 },
  { label: '16GB', id: 16 },
  { label: '32GB', id: 32 },
  { label: '64GB', id: 64 },
];

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
        <Grid.Column width={5}>
          <Segment basic vertical>
            <Header
              as="h2"
              content="Pilih ukuran RAMmu"
              className="text-bold"
              size="large"
            />
            {ramOptions.map(({ label, id }) => (
              <React.Fragment>
                <Checkbox
                  toggle
                  checked={this.props.app.ram.includes(id)}
                  label={label}
                  onClick={() => this.handleButton(id)}
                />
                <br />
                <br />
              </React.Fragment>
            ))}
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment basic>
            <Header as="h2" content="RAM" className="text-bold" size="huge" />
            <p className="text-lg text-wrap">
              <i>Random Access Memory</i> adalah suatu penyimpanan data yang
              digunakan dalam komputer, umumnya terletak di <i>motherboard</i>.
              Memori ini hanya sementara menyimpan data dan semua informasi yang
              disimpan dalam RAM akan hilang ketika komputer dimatikan.
              <br />
              <a
                className="text-md"
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
