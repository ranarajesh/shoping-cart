import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collecton-overview/collection-overview.component';
import Collection from '../collection/collection.component';

import { ShopContainer } from './shop.styles';

const ShopPage = ({ match }) => (
  <ShopContainer>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </ShopContainer>
);

export default ShopPage;
