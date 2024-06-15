import { Router } from 'express'
import { type DeckModelType } from '../types/Deck'
import { DeckController } from '../controllers/Deck'

export const createDeckRouter = ({ deckModel }: { deckModel: DeckModelType }): Router => {
  const deckRouter = Router()

  const deckController = new DeckController({ deckModel })

  deckRouter.get('/', (req, res) => {
    return deckController.getAll(req, res)
  })

  return deckRouter
}
