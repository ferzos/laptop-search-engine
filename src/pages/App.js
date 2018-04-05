import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';
import logo from '../assets/logo.svg';
import Heading from '../components/Heading';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    const style = {
      width: '50%',
      margin: '0 auto',
    };

    const style2 = {
      textAlign: 'right',
      marginRight: '14%',
      cursor: 'pointer',
    };

    return (
      <div style={style}>
        <div className="color-primary">
          <Heading text={this.props.app.headingText} logo={logo} />
        </div>
        <div
          style={style2}
          className="color-secondary text-sm"
          onClick={() => this.props.fetchText('Ferzos')}
        >
          {this.props.app.copyrightText}{' '}
          <FontAwesomeIcon icon={Icons.faCopyright} />
          <Card>
            <Image src={logo} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchText: fetchText,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
