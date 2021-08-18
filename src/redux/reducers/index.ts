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
      return {...state, myCats: [...state.myCats, action.payload]};
    case DELETE_CAT: {
      console.log(action.payload);
      return {
        ...state,
        myCats: state.myCats.filter(cat => cat.id !== action.payload.id),
      };
    }
    case UPDATE_CAT: {
      return {
        ...state,
        myCats: state.myCats.filter(cat => {
          if (cat.id == action.payload.id) {
            return action.payload;
          }
          return cat;
        }),
      };
    }
    default:
      return state;
  }
}
