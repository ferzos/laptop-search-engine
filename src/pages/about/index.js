// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/fontawesome-free-solid';
// import logo from '../assets/logo.svg';
import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import AboutCard from '../../components/about/AboutCard';
import ReactLogo from '../../assets/react.svg.png';
import NodeLogo from '../../assets/node-js.svg.png';
import ReduxLogo from '../../assets/redux.png';
import SassLogo from '../../assets/sass.svg.png';
import MongoDBLogo from '../../assets/mongodb.png';

export default class About extends Component {
  render = () => (
    <div className="about">
      <ResponsiveContainer>
        <Grid centered container>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header
                as="h3"
                size="huge"
                className="color-primary text-bold"
                content="Tentang Pembuat"
              />
              <AboutCard />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header
                as="h3"
                size="huge"
                className="color-primary text-bold"
                content="Teknologi Proyek Mesin Pencari Laptop"
              />
              <Image.Group>
                <Image src={NodeLogo} size="medium" />
                <Image src={ReactLogo} size="medium" />
              </Image.Group>
              <Image.Group>
                <Image src={ReduxLogo} size="medium" />
                <Image src={SassLogo} size="small" />
                <Image src={MongoDBLogo} size="small" />
              </Image.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
}
