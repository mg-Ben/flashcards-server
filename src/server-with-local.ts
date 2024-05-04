import { createApp } from './app.js'

import { DeckModel } from './models/local/Deck.js'

const deckModel = new DeckModel()

createApp({ deckModel })
