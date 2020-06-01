import shopTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utills';

export const fetchCollectionStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsError = (message) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: message,
});

export const fetchCollectionsAsync = () => async (dispatch) => {
  dispatch(fetchCollectionStart());
  try {
    const collectionRef = firestore.collection('collections');
    const collections = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(collections);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    dispatch(fetchCollectionsError(e.message));
  }
};
