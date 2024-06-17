import express, { Express } from 'express'
import v1WorkoutRouter from './v1/routes/workoutRoutes'

const app: Express = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`))
