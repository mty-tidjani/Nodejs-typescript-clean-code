import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRouter } from '../routes';

export const startExpressServer = async (port: number) => {

    const app = express();

    app.use(bodyParser.json());

    app.use(AppRouter.path, AppRouter.getInstance().init());

    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}