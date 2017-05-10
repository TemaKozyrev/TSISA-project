import {
    POSITION_CHANGED
} from '../constants/cursor';

export function changeCursor (newPosition) {
  return function (dispatch) {
    dispatch({
      POSITION_CHANGED,
      payload: { position: newPosition }
    });
  };
}
