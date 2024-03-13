import express from 'express';
import morgan from 'morgan';
import routes from './root-routes';

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  const app = express();

  app.use(morgan('dev'));

  app.use('/', routes);

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });

