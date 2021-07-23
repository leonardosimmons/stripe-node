
import Express from 'express';

import * as config from '../controllers/config';
import * as payment from '../controllers/payment';

const router: Express.Router = Express.Router();


router.use('/stripe-key', config.getStripeKey);

router.use('/create-payment-intent', payment.createPaymentIntent);

export default router;