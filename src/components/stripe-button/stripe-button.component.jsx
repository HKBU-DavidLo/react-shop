import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IAq1rACspT1BUvNfELCLbCyogYzmqrgwGdTDLsWN158QvCerO43ouQHXI9nDa5tHZP0M8GDC2am6018rErQVQq000fsKC7q4X'
    
    const onToken = token => {
        console.log(token)
        alert('Stripe Testing Function Successful!')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Limited"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Yor total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} 
        />
    )
}

export default StripeCheckoutButton