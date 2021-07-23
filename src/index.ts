
// allows for env variables to be loaded ONLY during development
if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); };

import Express, { NextFunction } from 'express';

import { consoleText } from './helpers/definitions';

import headerRoutes from './routes/headers';
import errorRoutes from './routes/error';
import apiRoutes from './routes/router';

const {
  PORT,
  DEV_PORT,
} = process.env;


const server = Express();
const SERVER_PORT: string = PORT! || DEV_PORT!;


server.use(Express.urlencoded({ extended: false }));
server.use(
  (
    req: Express.Request,
    res: Express.Response,
    next: NextFunction
  ): void => {
    if (req.originalUrl === '/webhook') {
      next();
    } else {
      Express.json()(req, res, next);
    }
  }
);

server.use(headerRoutes);
server.use('/api/stripe', apiRoutes);
server.use(errorRoutes);

server.listen(SERVER_PORT, () => {
  console.log(consoleText.magenta, `[server] server is listening on port ${SERVER_PORT}`);
});
