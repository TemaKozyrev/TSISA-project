import React, { Component } from 'react';
import './styles.scss';
import data from './text.json';
import $ from "jquery";

export default class Text extends Component {
  componentDidMount () {
    $('.text').on('scroll', () => { this.handleScroll(); });
  }

  handleScroll () {
    console.log(
      $('.text').scrollTop()
    );
  }
  render () {
    return (
      <div className="text">
        { data.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
      </div>
    );
  }
}
