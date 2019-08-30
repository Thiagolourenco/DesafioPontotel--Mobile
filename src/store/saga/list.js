import {call, put} from 'redux-saga/effects';
import api from '../../services/api';

import ListActions from '../ducks/list';

export function* getList() {
  const response = yield call(api.get, 'launches');

  yield put(ListActions.getListSuccess(response.data));
}

export function* getListId({id}) {
  const response = yield call(api.get, 'launches', {id});

  yield put(ListActions.getListIdSuccess(response.data));
}
