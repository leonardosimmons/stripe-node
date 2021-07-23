
import Express from 'express';


const {
  STRIPE_PUBLISHABLE_KEY
} = process.env;


export async function getStripeKey(_: Express.Request, res: Express.Response): Promise<any>
{
  const key: string = STRIPE_PUBLISHABLE_KEY!;
  
  return res.status(200).json({
    publishableKey: key
  });
};
