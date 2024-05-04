import { type DeckModelType } from '../../types/Deck'

export class DeckModel implements DeckModelType {
  async get (): Promise<string> {
    return 'OK'
  }
}
