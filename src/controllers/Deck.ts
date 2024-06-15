import { type DeckModelType } from '../types/Deck'

export class DeckController {
  deckModel: DeckModelType

  constructor ({ deckModel }: { deckModel: DeckModelType }) {
    this.deckModel = deckModel
  }

  async getAll (req, res): Promise<void> {
    const result = await this.deckModel.getAll()
    res.status(200).json(result)
  }
}
