import { Router } from 'express'
import { type DeckModelType } from '../types/Deck'
import { DeckController } from '../controllers/Deck'

export const createDeckRouter = ({ deckModel }: { deckModel: DeckModelType }): Router => {
  const deckRouter = Router()

  const deckController = new DeckController({ deckModel })

  deckRouter.get('/', (req, res) => {
    deckController.getAll(res).catch((error) => {
      res.status(500).json({ message: error })
    })
  })

  return deckRouter
}
