import React, { PropTypes, Component } from 'react';
import './styles.scss';
import data from './text.json';
import $ from "jquery";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cursorActions from '../../actions/CursorActions';

class Text extends Component {

  componentDidMount () {
    $('.text').on('scroll', () => { this.handleScroll(); });
  }

  handleScroll () {
    this.props.cursorActions.changeCursor($('.text').scrollTop());
  }
  render () {
    return (
      <div className="text">
        { data.text.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    cursor: state.cursor
  };
}

function mapDispatchToProps (dispatch) {
  return {
    cursorActions: bindActionCreators(cursorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);
