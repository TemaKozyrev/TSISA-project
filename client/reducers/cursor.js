import {
    POSITION_CHANGED
} from '../constants/cursor';

const initialState = {
  position: 0,
  maxPosition: 138 //stub
};

export default function cursor (state = initialState, action) {
  switch (action.type) {
    case POSITION_CHANGED:
      return { ...state, position: action.payload.position };
    default:
      return state;
  }
}
