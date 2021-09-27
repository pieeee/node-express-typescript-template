import express, { Express, Request, Response } from 'express'

// UTILS
const app: Express = express()
// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(4000, () => console.log('Server Running on port: ' + 4000))
