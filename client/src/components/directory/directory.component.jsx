import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  // 上記アロー関数の処理の内容：
  // selectDirectorySectionsオブジェクトから id と otherProps（その他要素） に分けて取り出し、
  // <MenuItem>コンポーネントに上記２つを与えている。
  // .map()により、Directory配列から要素を取り出し、繰り返し処理している。
  // Directory配列の要素の数だけ、<MenuItem>コンポーネントの描画を繰り返している。
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
