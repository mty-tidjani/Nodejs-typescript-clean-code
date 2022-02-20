import { startExpressServer } from "./_infrastructure/server/express-server";

const port = process.env.PORT || 4000

startExpressServer(port).then(() => {
    console.log(`Clean architecture fired on port ${port} `)
}).catch((error) => {
    console.log('Server not started!')
    console.error(error)
})