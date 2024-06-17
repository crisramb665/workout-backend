import express from 'express'
import {
  getAllWorkouts,
  createNewWorkout,
  deleteOneWorkout,
  getOneWorkout,
  updateOneWorkout,
} from '../../controllers/workoutController'

const router = express.Router()

router
  .get('/', getAllWorkouts)
  .get('/:workoutId', getOneWorkout)
  .post('/', createNewWorkout)
  .patch('/:workoutId', updateOneWorkout)
  .delete('/:workoutId', deleteOneWorkout)

export default router
