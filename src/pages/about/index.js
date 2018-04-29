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
import MLabLogo from '../../assets/mlab.png';
import ExpressLogo from '../../assets/express.png';
import HerokuLogo from '../../assets/heroku.png';

export default class About extends Component {
  render = () => (
    <div className="about">
      <ResponsiveContainer>
        <Grid centered container stackable>
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
              <Grid centered container stackable>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={MLabLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={MongoDBLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={ExpressLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={HerokuLogo} fluid />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={NodeLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={ReactLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={ReduxLogo} fluid />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={SassLogo} fluid />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ResponsiveContainer>
    </div>
  );
}
