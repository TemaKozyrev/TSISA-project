import {
    POSITION_CHANGED
} from '../constants/cursor';

export function changeCursor (newPosition) {
  return function (dispatch) {
    dispatch({
      type: POSITION_CHANGED,
      payload: { position: newPosition }
    });
  };
}
