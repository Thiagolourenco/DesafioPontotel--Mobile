import {all, takeLatest} from 'redux-saga/effects';

import {getList, getListId} from './list';
import {ListTypes} from '../ducks/list';

export default function* rootSaga() {
  return yield all([
    takeLatest(ListTypes.GET_LIST_REQUEST, getList),
    takeLatest(ListTypes.GET_LIST_ID_REQUEST, getListId),
  ]);
}
