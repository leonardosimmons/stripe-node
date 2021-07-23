
import Stripe from 'stripe';

const {
  STRIPE_PUBLISHABLE_KEY
} = process.env;

const stripe = new Stripe(STRIPE_PUBLISHABLE_KEY!, { 
  apiVersion: '2020-08-27',
  typescript: true
});

export default stripe;