import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRouter } from '../routes';
import { DataBase } from '../core/Database';

export const startExpressServer = async (port: number | string) => {

    const app = express();

    app.use(bodyParser.json());

    app.use(AppRouter.path, AppRouter.getInstance().init());

    await new Promise((resolve) => app.listen(port, async () => {
        
        await DataBase.connect()

        resolve(app)
    }));
}