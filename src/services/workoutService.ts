import Workout from '../database/Workout'

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const createNewWorkout = () => {
  return
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
