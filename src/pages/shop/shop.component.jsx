import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collecton-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import { ShopContainer } from './shop.styles';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utills';

import { updateCollections } from '../../redux/shop/shop.action';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
      }
    );
  }
  render() {
    const { match } = this.props;
    return (
      <ShopContainer>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </ShopContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
