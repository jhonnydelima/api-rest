import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server is running on port 3333')
  })
