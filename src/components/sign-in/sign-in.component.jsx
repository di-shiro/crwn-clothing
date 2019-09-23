import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value }); // ES6: 変数name をオブジェクト内で展開する記法。
    // REF: オブジェクトのkeyに変数を使う。 https://qiita.com/kmagai/items/95481a3b9fd97e4616c9
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.email}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
