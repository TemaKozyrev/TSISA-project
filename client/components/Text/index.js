import React, { Component } from 'react';
import './styles.scss';
import data from './text.json';

export default class Text extends Component {
  componentDidMount () {
    console.log(data.text);
  }
  render () {
    return (
      <div className="text">
        { data.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
      </div>
    );
  }
}
