import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopContainer } from './shop.styles';

import { fetchCollectionStart } from '../../redux/shop/shop.action';
import CollectionOverviewContainer from '../../components/collecton-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionStart();
  }
  render() {
    const { match } = this.props;
    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </ShopContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
