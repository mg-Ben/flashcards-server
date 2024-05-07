import express, { json, type Express as ExpressType } from 'express'
import { type DeckModelType } from './types/Deck'
import { corsMiddleware } from './middlewares/cors'
import { createDeckRouter } from './routes/Deck'

export const createApp = ({ deckModel }: { deckModel: DeckModelType }): ExpressType => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/decks', createDeckRouter({ deckModel }))

  return app
}
