import {
    POSITION_CHANGED,
    ADD_PARAGRAPH
} from '../constants/cursor';
import _ from 'lodash';

const initialState = {
  position: 0,
  maxPosition: 138, //stub
  paragraphs: []
};

export default function cursor (state = initialState, action) {
  switch (action.type) {
    case POSITION_CHANGED:
      return { ...state, position: action.payload.position };
    case ADD_PARAGRAPH:
      return { ...state,
        paragraphs: _.concat(state.paragraphs, { index: action.payload.index, height: action.payload.height }) };
    default:
      return state;
  }
}
