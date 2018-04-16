import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Image } from 'semantic-ui-react';

import ProcessorImage from '../../assets/processor.jpg';

export default class Processor extends Component {
  render = () => (
    <Grid centered container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Processor"
              className="text-bold"
              size="huge"
            />
            <p>
              <i>Processor</i> adalah sirkuit elektronik terintegrasi yang
              melakukan perhitungan untuk menjalankan komputer. Sebuah prosesor
              melakukan operasi aritmatika, logis, <i>input</i> / <i>output</i>{' '}
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
        <Grid.Column width={8} verticalAlign="middle">
          <Segment basic size="massive">
            <Header
              as="h3"
              content="Pilih Processormu"
              className="text-bold"
              size="large"
            />
            <Button.Group vertical>
              <Button content="Intel i3" size="massive" />
              <Button content="Intel i5" size="massive" />
              <Button content="Intel i7" size="massive" />
              <Button content="AMD" size="massive" />
            </Button.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
