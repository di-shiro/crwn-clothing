import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kmkjqxXuMJIAdtZkG17o29Cz00O9aopi9h';

  const onToken = token => {
    console.warn('stripe-button.component', token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        console.info('Payment successful');
        alert('Payment Successful');
      })
      .catch(error => {
        console.assert(!error, 'Payment error : ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now !!'
      name='Pinapple selling web page'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
