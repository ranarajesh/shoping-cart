import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => {
  return shop.collections;
});

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );
