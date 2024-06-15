import { type DeckModelType, Deck } from '../../types/Deck'

export class DeckModel implements DeckModelType {
  async get(): Promise<string> {
    return 'OK'
  }
  async getAll(): Promise<Deck[]> {
    const decks = [
      {
        uuid: '89c09a27-2194-11ef-8aa6-6c240852178d',
        name: 'Japanese vocabulary',
        description: 'My deck with japanese vocabulary',
      },
      {
        uuid: '89c2e38e-2194-11ef-8aa6-6c240852178d',
        name: 'Bash commands',
        description: 'My deck with Linux commands',
      },
      {
        uuid: '89c3bcf8-2194-11ef-8aa6-6c240852178d',
        name: 'Mysterious deck',
        description: 'Now it is not a mysterious deck',
      },
    ]
    return decks
  }
}
