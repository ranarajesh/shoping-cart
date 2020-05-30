import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './directory.styles.scss';

import MenuItem from '../menuitem/menuitem.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionObj }) => (
      <MenuItem key={id} {...otherSectionObj} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
