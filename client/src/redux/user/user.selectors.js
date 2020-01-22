import { createSelector } from 'reselect';

const selectUser = state => state.user;

// const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectCurrentUserName = createSelector(
  [selectUser],
  user => user.currentUser.displayName
);
