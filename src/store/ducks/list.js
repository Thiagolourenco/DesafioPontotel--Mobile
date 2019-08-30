import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getListSuccess: ['data'],
  getListRequest: null,
  getListIdSuccess: ['data'],
  getListIdRequest: null,
});

export const ListTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const success = (state, {data}) => state.merge({data});

export const successId = (state, {data}) => state.merge({data});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_SUCCESS]: success,
  [Types.GET_LIST_ID_SUCCESS]: successId,
});
