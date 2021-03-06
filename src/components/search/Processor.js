import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProcessorImage from '../../assets/processor.jpg';
import { selectProcessor } from '../../actions';

const processorOptions = [
  {label: "Intel i3", id: 'i3'},
  {label: "Intel i5", id: 'i5'},
  {label: "Intel i7", id: 'i7'},
  {label: "Intel i9", id: 'i9'},
  {label: "AMD", id: 'amd'}, 
]

class Processor extends Component {
  handleButton = data => {
    let newChosen = this.props.app.processor.slice();

    if (newChosen.includes(data)) {
      const filteredChosen = newChosen.filter(processor => processor !== data);
      this.props.selectProcessor(filteredChosen);
    } else {
      newChosen.push(data);
      this.props.selectProcessor(newChosen);
    }
  };

  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment basic vertical>
            <Header
              as="h2"
              content="Pilih Processormu"
              className="text-bold"
              size="large"
            />
            {processorOptions.map(({ label, id }) => (
              <React.Fragment>
              <Checkbox
                checked={this.props.app.processor.includes(id)}
                label={label}
                toggle
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
            <Header
              as="h2"
              content="Processor"
              className="text-bold"
              size="huge"
            />
            <p className="text-lg text-wrap">
              <i>Processor</i> adalah sirkuit elektronik terintegrasi yang
              melakukan perhitungan untuk menjalankan komputer. Sebuah prosesor
              melakukan operasi aritmatika, logis, <i>input</i> / <i>output</i>
              (I / O) dan instruksi-instruksi dasar lainnya yang dikirim dari
              sistem operasi (<i>Operating System</i>). <i>Processor</i> sering
              juga disebut CPU (<i>Central Processing Unit</i>)
              <br />
              <a
                target="_blank"
                className="text-md"
                href="https://www.techopedia.com/definition/28254/processor"
              >
                <i>https://www.techopedia.com/definition/28254/processor</i>
              </a>
            </p>
            <Image src={ProcessorImage} alt="processor" size="medium" />
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
  return bindActionCreators({ selectProcessor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Processor);
