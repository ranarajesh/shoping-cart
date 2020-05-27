import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from './../collection-item/collection-item.component';

const CollectionPrewiew = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPrewiew;
