import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';

class Lines extends Component {

  render () {
    const { cursor } = this.props;

    return (
      <div className="lines">
        <div className="cursor" style={{ top: ((cursor.position / 1.38) * 5) }} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    cursor: state.cursor
  };
}

export default connect(mapStateToProps)(Lines);
