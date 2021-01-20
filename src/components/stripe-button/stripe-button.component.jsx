import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51IBWBnGHCoVNQmhA6nUJIjGx0tU3YyxQ0UQ2QsGYKNP3JpxLOcO3D3gZLDxBkJIwltW6ZjnnyejvhzlwGBLr4ULL008nq8tN6c"

  // this would be where you take the payment and send it to your backend for processing
  const onToken = (token) => {
    console.log(token)
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="React E-commerce Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
