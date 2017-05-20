import {
    POSITION_CHANGED,
    ADD_PARAGRAPH
} from '../constants/cursor';

export function changeCursor (newPosition) {
  return function (dispatch) {
    dispatch({
      type: POSITION_CHANGED,
      payload: { position: newPosition }
    });
  };
}

export function addParagraphHeight ({ index, height }) {
  return function (dispatch) {
    dispatch({
      type: ADD_PARAGRAPH,
      payload: { index: index, height: height }
    });
  };
}
