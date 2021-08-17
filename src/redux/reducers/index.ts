import {AppAction, AppMainState} from '../../utitles/models';
import {ThemeType} from '../../utitles/constants/common';
import {ADD_CAT, DELETE_CAT, UPDATE_CAT} from '../actions';

// Initial State
const initialState: AppMainState = {
  theme: ThemeType.LIGHT,
  myCats: [],
};

export default function reducer(
  state: AppMainState = initialState,
  action: AppAction,
): AppMainState {
  switch (action.type) {
    case ADD_CAT:
      state.myCats.push(action.payload);
      return {...state};
    case DELETE_CAT: {
      state.myCats.splice(action.payload, 1);
      return {...state};
    }
    case UPDATE_CAT: {
      state.myCats[action.index!] = action.payload;
      return {...state};
    }
    default:
      return state;
  }
}
