import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from './collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionOverviewContainer;
