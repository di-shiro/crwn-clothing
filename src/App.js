import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    console.log('TEST : componentDidMount() in App.js');

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   console.log(
    //     'TEST : componentDidMount() in App.js: START: async userAuth => {}'
    //   );

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       // 以下、本来は this.props.setCurrentUser だったが、これから this.props を取り除いた形にした。
    //       setCurrentUser(
    //         {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         },
    //         () => {
    //           console.log('async 2nd param : ', this.prop);
    //         }
    //       );
    //       console.log(this.prop);
    //     });
    //   } else {
    //     // this.setState({ currentUser: userAuth });
    //     setCurrentUser(userAuth);
    //   }
    // });
    console.log(
      'TEST : componentDidMount() in App.js: END: async userAuth => {}'
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
