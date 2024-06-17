import WorkoutDB from './db.json'

const getAllWorkouts = () => {
  return WorkoutDB.workouts
}

export default { getAllWorkouts }
