import shopTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utills';

const fetchCollectionStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionsError = (message) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: message,
});

export const fetchCollectionsAsync = () => async (dispatch) => {
  dispatch(fetchCollectionStart());
  try {
    const collectionRef = firestore.collection('collections');
    const collections = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(collections);
    dispatch(fetchCollectionSuccess(collectionsMap));
  } catch (e) {
    dispatch(fetchCollectionsError(e.message));
  }
};
