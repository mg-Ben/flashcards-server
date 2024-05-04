import { type DeckModelType } from '../types/Deck'

export class DeckController {
  deckModel: DeckModelType

  constructor ({ deckModel }: { deckModel: DeckModelType }) {
    this.deckModel = deckModel
  }

  async get (req, res): Promise<void> {
    const message = await this.deckModel.get()
    res.status(200).json({ message })
  }
}
