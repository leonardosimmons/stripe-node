
import Express from 'express';
import { consoleText } from '../helpers/definitions';
import { HttpError } from '../utils/types';

const router: Express.Router = Express.Router();


router.use('/favicon.ico', (_: Express.Request, res: Express.Response, next: Express.NextFunction): void => {
  res.status(204);
});

router.use((error: HttpError, _: Express.Request, res: Express.Response): void => {
  console.log(consoleText.red, `[error] ${ error.log ? error.log : error.message }`);
  const status: number = error.statusCode!;
  const message: string = error.message;
  const log: string | undefined = error.log;

  if (log) {
    res.status(status).json({
      message: message,
      log: log
    });
  } 
  else {
    res.status(status).json({
      message: message
    });
  }
});

export default router;
