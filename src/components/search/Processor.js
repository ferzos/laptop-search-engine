import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProcessorImage from '../../assets/processor.jpg';
import { selectProcessor } from '../../actions';

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
        <Grid.Column width={8}>
          <Segment basic>
            <Header
              as="h2"
              content="Processor"
              className="text-bold"
              size="huge"
            />
            <p className="text-md text-wrap">
              <i>Processor</i> adalah sirkuit elektronik terintegrasi yang
              melakukan perhitungan untuk menjalankan komputer. Sebuah prosesor
              melakukan operasi aritmatika, logis, <i>input</i> / <i>output</i>
              (I / O) dan instruksi-instruksi dasar lainnya yang dikirim dari
              sistem operasi (<i>Operating System</i>). <i>Processor</i> sering
              juga disebut CPU (<i>Central Processing Unit</i>)
              <br />
              <a
                className="text-sm"
                href="https://www.techopedia.com/definition/28254/processor"
              >
                <i>https://www.techopedia.com/definition/28254/processor</i>
              </a>
            </p>
            <Image src={ProcessorImage} alt="processor" size="medium" />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic vertical>
            <Header
              as="h2"
              content="Pilih Processormu"
              className="text-bold"
              size="large"
            />
            <Checkbox
              checked={this.props.app.processor.includes('i3')}
              label="Intel i3"
              toggle
              onClick={() => this.handleButton('i3')}
            />
            <br />
            <br />
            <Checkbox
              checked={this.props.app.processor.includes('i5')}
              label="Intel i5"
              toggle
              onClick={() => this.handleButton('i5')}
            />
            <br />
            <br />
            <Checkbox
              checked={this.props.app.processor.includes('i7')}
              label="Intel i7"
              toggle
              onClick={() => this.handleButton('i7')}
            />
            <br />
            <br />
            <Checkbox
              checked={this.props.app.processor.includes('amd')}
              label="AMD"
              toggle
              onClick={() => this.handleButton('amd')}
            />
            <br />
            <br />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Processor);
