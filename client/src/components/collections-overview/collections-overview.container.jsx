import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

// composeを使わない通常の記載： -- 追記：2020.01.19
// 上記 compose() を利用した表現を理解するためにメモを残す。
// const CollectionsOverviewContainer = connect( mapStateToProps )( WithSpinner( CollectionsOverview ) );

// 商品一覧データをFireStoreから非同期でロードする必要がある。
// そのため「ローディング状態」を Redux に一時的に保持しておいて、それを逐次チェックする処理としている。
// ここでの処理は、mapStateToProps()で Redux - Store に接続して、データのローディング状態 selectIsCollectionFetching
// を引き出して、それを <WithSpinner>コンポーネントに渡して、
// その内部で2つのコンポーネント < Spinner > と < CollectionOverview > とを切り替えている。
// WithSpinner()は高階関数(HOC) なので、その内側で CollectionsOverview() コンポーネント が動いている形である。

// メモ：　{ isLoading: selectIsCollectionFetching }というオブジェクト形式
