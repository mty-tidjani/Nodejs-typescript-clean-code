import * as dotenv from "dotenv";
import { startExpressServer } from "./_infrastructure/server/express-server";

dotenv.config()

const port = 4000

startExpressServer(port).then(() => {
    console.log(`Clean code fired on port ${port}`)
}).catch((error) => {
    console.log('Server not started!')
    console.error(error)
})