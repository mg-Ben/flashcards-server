export interface DeckModelType {
  get: () => Promise<string>
  getAll: () => Promise<Deck[]>
}

export interface Deck {
  uuid: string
  name: string
  description: string
}