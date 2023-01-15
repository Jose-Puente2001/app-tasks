import express from 'express'
import cors from 'cors'
import indexRoute from './routes/index.routes.js'
import tasksRoute from './routes/tasks.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRoute)
app.use(tasksRoute)
app.listen(4000)

console.log("servidor en el puerto 4000")