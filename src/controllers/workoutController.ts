import { Request, Response } from 'express'

import workoutService from '../services/workoutService'

export const getAllWorkouts = (req: Request, res: Response) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

export const getOneWorkout = (req: Request, res: Response) => {
  const workout = workoutService.getOneWorkout()
  res.send(`Get workout ${req.params.workoutId}`)
}

export const createNewWorkout = (req: Request, res: Response) => {
  const createdWorkout = workoutService.createNewWorkout()
  res.send(`Create workout ${req.params.workoutId}`)
}

export const updateOneWorkout = (req: Request, res: Response) => {
  const updatedWorkout = workoutService.updateOneWorkout()
  res.send(`Update workout ${req.params.workoutId}`)
}

export const deleteOneWorkout = (req: Request, res: Response) => {
  workoutService.deleteOneWorkout()
  res.send(`Delete workout ${req.params.workoutId}`)
}
