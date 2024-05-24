import { createApp } from './app'

import { DeckModel } from './models/mysql/Deck'

const deckModel = new DeckModel()

export const app = createApp({ deckModel })

const PORT = process.env.PORT ?? 3000

export const server = app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
