import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles';

import MenuItem from '../menuitem/menuitem.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionObj }) => (
      <MenuItem key={id} {...otherSectionObj} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
