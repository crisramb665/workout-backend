import { v4 as uuidv4 } from 'uuid'
import Workout from '../database/Workout'

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId: any) => {
  const workout = Workout.getOneWorkout(workoutId)
  return workout
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

const updateOneWorkout = (workoutId: any, changes: any) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId: any) => {
  Workout.deleteOneWorkout(workoutId)
}

export default { getAllWorkouts, createNewWorkout, deleteOneWorkout, getOneWorkout, updateOneWorkout }
