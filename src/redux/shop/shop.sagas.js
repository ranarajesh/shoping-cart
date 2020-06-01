import { takeLatest, call, put, all } from 'redux-saga/effects';

import shopTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utills';

import { fetchCollectionsSuccess, fetchCollectionsError } from './shop.action';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const collections = yield collectionRef.get();
    // It's recommended that always use to call effects of redux-saga/effects to call function because it may be chance that function take longer time to execute, so redux-saga will handle it easily
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collections
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}
export function* onFetchCollectionStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync); // 1st argument action type and second argument is another generator function which will initiat async api call. PS. here redux saga effect is usefull to make concurrent saga execution which is not blocking the js execution
}

export function* shopSagas() {
  yield all([call(onFetchCollectionStart)]);
}
