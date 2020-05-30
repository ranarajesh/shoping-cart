import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe require to convert the doller to cents
  const publishableKey = 'pk_test_S3Kdi05U3pm4XjvH02OgiXIM00cqzcFiul';

  const onToken = (token) => {
    // stripe will return token after cr or card payment done so, we can send these information to our backend server api to handle or complete the checkout flow
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="NovelTeCH Info  Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
