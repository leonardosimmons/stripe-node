
import Express, {NextFunction} from 'express';
import Stripe from 'stripe';
import stripe from '../auth/stripe';
import { randNum } from '../helpers/functions';


function calculateOrderAmount(): number {
  return randNum(10000, 100000);
};


export async function createPaymentIntent(req: Express.Request, res: Express.Response, next: NextFunction): Promise<void> 
{
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { currency, items, paymentMethod, parent } = req.body;

  console.log(`Curreny: ${currency}\nItems: ${items}\nPayment Method: ${paymentMethod}\n Parent: ${parent}`);
  
  try {
    const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd'
    });

    console.log(paymentIntent);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret
    });
  }
  catch(err) {
    next(err);
  }
};
