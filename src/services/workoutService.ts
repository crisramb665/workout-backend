import { v4 as uuidv4 } from 'uuid'
import Workout from '../database/Workout'

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const createNewWorkout = (newWorkout: any) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }

  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return createdWorkout
}

const deleteOneWorkout = () => {
  return
}

const getOneWorkout = () => {
  return
}

const updateOneWorkout = () => {
  return
}

export default { getAllWorkouts, createNewWorkout, deleteOneWorkout, getOneWorkout, updateOneWorkout }
