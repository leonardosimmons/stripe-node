
import Express from 'express';

const router: Express.Router = Express.Router();

router.use((_: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, auth-token');
  next();
});

export default router;