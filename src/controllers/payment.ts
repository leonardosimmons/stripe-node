
import Express, {NextFunction} from 'express';
import Stripe from 'stripe';
import stripe from '../auth/stripe';
import { randNum } from '../helpers/functions';


interface Order {
  items: Array<object>;
};


function calculateOrderAmount(items: Order): number {
  // calculate the total amount here
  // NOT ON CLIENT
  return randNum(10000, 100000);
};


export async function createPaymentIntent(req: Express.Request, res: Express.Response, next: NextFunction): Promise<any> 
{
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { currency, items } = req.body;

  try {
    if (items) {
      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency
      });
  
      return res.status(200).json({
        clientSecret: paymentIntent.client_secret
      });
    }

    res.status(200).json({
      message: 'Stipe intent creation failed'
    });
  }
  catch(err) {
    next(err);
  }
};
