import WorkoutDB from './db.json'
import { saveToDatabase } from './utils'

const getAllWorkouts = () => {
  return WorkoutDB.workouts
}

const createNewWorkout = (newWorkout: any) => {
  const isAlreadyAdded = WorkoutDB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1
  console.log({ isAlreadyAdded })

  if (isAlreadyAdded) return

  WorkoutDB.workouts.push(newWorkout)
  saveToDatabase(WorkoutDB)

  return newWorkout
}

export default { getAllWorkouts, createNewWorkout }
