import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collecton-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { ShopContainer } from './shop.styles';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utills';

import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ isLoading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </ShopContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
