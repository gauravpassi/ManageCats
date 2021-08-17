import {Cat} from '../../model/Cat';
export const ADD_CAT = 'ADD_CAT';
export const UPDATE_CAT = 'UPDATE_CAT';
export const DELETE_CAT = 'DELETE_CAT';

export const addCat = (cat: Cat) => {
  return {
    type: ADD_CAT,
    response: cat,
  };
};

export const updateCat = (cat: Cat) => {
  return {
    type: UPDATE_CAT,
    response: cat,
  };
};

export const deleteCat = (id: number) => {
  return {
    type: DELETE_CAT,
    response: id,
  };
};
