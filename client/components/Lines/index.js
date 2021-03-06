import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Lines extends Component {

  getPercentHeight (paragraphs, index) {
    let maxHeight = this.props.cursor.maxPosition;
    let height = (paragraphs[index].height) / (maxHeight / 100) * 5;
    return height;
  }

  render () {
    const { cursor } = this.props;

    return (
      <div className="lines">
        <div className="cursor" style={{ top: ((cursor.position / ((cursor.maxPosition) / 100)) * 5) }} />
          {cursor.paragraphs.map((paragraph, i) => (<div key={i} className="block"
          style={{
            height: this.getPercentHeight(cursor.paragraphs, i),
            backgroundColor: 'rgba(' + (i * 50) + ', 123, 89, 0.2)'
          }}>
            {paragraph.height}
          </div>))}
      </div>
    );
  }
}

Lines.propTypes = {
  cursor: PropTypes.object,
  maxPosition: PropTypes.integer
};

function mapStateToProps (state) {
  return {
    cursor: state.cursor
  };
}

export default connect(mapStateToProps)(Lines);
