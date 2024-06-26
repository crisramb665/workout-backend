import { Request, Response } from 'express'

import workoutService from '../services/workoutService'

export const getAllWorkouts = (req: Request, res: Response) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

export const getOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req

  if (!workoutId) return

  const workout = workoutService.getOneWorkout(workoutId)
  res.send({ status: 'OK', data: workout })
}

export const createNewWorkout = (req: Request, res: Response) => {
  const { body } = req

  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) return

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.status(201).send({ status: 'OK', data: createdWorkout })
}

export const updateOneWorkout = (req: Request, res: Response) => {
  const {
    body,
    params: { workoutId },
  } = req

  if (!workoutId) return

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)
  res.send({ status: 'OK', data: updatedWorkout })
}

export const deleteOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req

  if (!workoutId) return

  workoutService.deleteOneWorkout(workoutId)
  res.status(204).send({ status: 'OK' })
}
