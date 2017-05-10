import React, { Component } from 'react';
import './styles.scss';
import Text from '../Text';
import Lines from '../Lines';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Text />
        <Lines />
      </div>
    );
  }
}
