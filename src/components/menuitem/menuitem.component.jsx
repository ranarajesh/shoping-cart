import React from 'react';
import './menuitem.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <span className="sub-title"> SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
