import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectColllectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const collectionsOverview = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectColllectionsForPreview
});

export default connect(mapStateToProps)(collectionsOverview);
