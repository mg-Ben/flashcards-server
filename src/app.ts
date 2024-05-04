import express, { json } from 'express'
import { type DeckModelType } from './types/Deck'
import { corsMiddleware } from './middlewares/cors'
import { createDeckRouter } from './routes/Deck'

export const createApp = ({ deckModel }: { deckModel: DeckModelType }): void => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/decks', createDeckRouter({ deckModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
